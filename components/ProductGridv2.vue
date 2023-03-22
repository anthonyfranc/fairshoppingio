<template>
  <section class="py-12 sm:py-16 lg:py-6 bg-gray-50">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-center justify-center lg:justify-between">
        <!--Filters will go here-->
      </div>
      <div
        class="
          grid grid-cols-1
          gap-5
          mt-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          sm:mt-10
        "
      >
        <div
          class="
            relative
            overflow-hidden
            bg-white
            border border-gray-200
            rounded-xl
            group
          "
          v-for="ProductData in data"
        >
          <div class="absolute z-10 top-3 right-3">
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-rose-500
              "
            ></button>
          </div>
          <div class="relative">
            <div class="aspect-w-1 aspect-h-1">
              <img
                class="object-cover w-full h-full"
                :src="ProductData.Image"
                alt=""
              />
            </div>
            <div class="px-4 py-4">
              <h3 class="text-sm font-medium text-gray-800">
                <NuxtLink :to="`/product/${ProductData.id}`" title="">
                  {{ ProductData.Name }}
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </NuxtLink>
              </h3>
              <div class="flex items-center">
                <div class="flex items-center space-x-px">
                  <!--Ratings-->
                  <!--<star-rating
                    v-model:rating="ProductData.current_rating"
                    :round-start-rating="false"
                    :star-size="14"
                    :show-rating="false"
                  ></star-rating>-->
                  <div class="rating-holder">
                    <div
                      class="c-rating c-rating--small"
                      :data-rating-value="
                        Math.round(ProductData.current_rating / 0.25) * 0.25
                      "
                    >
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                    </div>
                  </div>
                  <div class="text-xs text-gray-400">
                    ({{ ProductData.current_rating }})
                  </div>
                </div>
              </div>
              <p class="mt-0.5 text-xs sm:text-sm font-medium text-gray-400">
                {{ ProductData.current_reviews }} Reviews
              </p>
              <p class="mt-2 text-sm font-bold text-gray-900 flex">
                {{
                  Number(ProductData.current_price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
                <div v-if="ProductData.previous_price_day > 0.00">
                <div v-if="ProductData.current_price == ProductData.previous_price_day">
                    <!--Price is the same-->
                </div>
                <div v-else="ProductData.current_price > ProductData.previous_price_day">
                   <!--Price has increased-->
                   
                </div>
                <div v-else="ProductData.current_price < ProductData.previous_price_day">
                    <!--Price has decreased-->
                    <img class="
                    w-2.5
                    "
                    style="
                    margin-left:2.2px;
                    padding-top:40%;
                    "
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Decrease.svg">
                </div>
                </div>
                <div v-else>
                    <!--Price is the same-->
                </div>
              </p>
            </div>
          </div>
          <div
            class="
              absolute
              inset-x-0
              bottom-0
              transition-all
              duration-200
              translate-y-full
              group-hover:translate-y-0
            "
          >
            <NuxtLink :to="`/product/${ProductData.id}`" title="">
              <button
                type="button"
                class="
                  flex
                  items-center
                  justify-center
                  w-full
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  bg-gray-900
                "
              >
                More Info
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!--End of Vif-->
  </section>
</template>

<script setup>
const supabase = useSupabaseClient();

const { data } = await supabase.from('productinfov1').select('*');
</script>
<style lang="scss">
////
/// Star Rating
/// @group components
/// @author Damián Muti
////

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400');

///
$rating-min-value: 0 !default;
///
$rating-max-value: 5 !default;
///
$rating-steps-value: 0.25 !default;
///
$rating-color-empty: '%23ddd' !default;
///
$rating-color-full: gold !default;
///
$rating-color-hover: grey !default;
/// This variable is a map containing the "d" attribute of each of the SVG icons
$rating-icons-paths: (
  quarter: 'M196.208 415.2v-224.8l-139.504 20.272 100.944 98.384-23.84 138.928z',
  half:
    'M258.672 64l-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6v-318.4z',
  three-quarters:
    'M321.616 190.496l-0.656-0.096-62.384-126.4-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6 63.024 33.136z',
  full:
    'M457.888 210.672l-139.504-20.272-62.384-126.4-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6 124.768 65.6-23.84-138.928c0 0 100.944-98.384 100.944-98.384z',
);

/// Creates a dynamic list of values that increment each .25 from 0 to 5
/// @return {list}
@function rating-values() {
  $rating-values: ();

  @for $i
    from $rating-min-value
    through (calc($rating-max-value / $rating-steps-value))
  {
    $rating-value: abs($i * $rating-steps-value);
    $rating-values: append($rating-values, $rating-value, 'comma');
  }

  @return $rating-values;
}

/// Generates an SVG with a given fill color depending on the type of icon passed as parameter. The SVG string is scaped for cross-browser support.
/// @param {string} $icon - Type of icon. Accepted values: `quarter`, `half`, `three-quarters` or `full`.
/// @param {color} $color - Passes the fill color of the SVG icon that is being generated. Note: Hexa color values must be escaped for cross-browser support.
/// @return {string} background value.
@function get-icon($icon, $color) {
  @if not index(quarter half three-quarters full, $icon) {
    @error "Interaction type must be either `quarter`, `half`, `three-quarters` or `full`.";
  }

  @return url('data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22512%22%20height%3D%22512%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22' + $color + '%22%20d%3D%22' + map-get(
        $rating-icons-paths,
        $icon
      ) + '%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')
    center / cover no-repeat;
}

/// This is a CSS-only star rating component that shows the proper rating depending on a data-attribute value. JS logic behind this component should round up values per quarter.
/// @param {number} $star-size [20px] - Provides width and height for each of the stars.
/// @param {string} $rating-element [button] - Element to use for each of the stars.
/// @param {string} $interaction-type [representative] - Indicates whether this component should be clickable or representative. Accepted values: `clickable` or `representative`.
/// @example scss
///   .class {
///     c-rating(toem(20px), button, clickable);
///   }
/// @example markup
///   <div class="c-rating" data-rating-value="3.25">
///     <span>1</span>
///     <span>2</span>
///     <span>3</span>
///     <span>4</span>
///     <span>5</span>
///   </div>
@mixin c-rating(
  $star-size: 20px,
  $star-element: button,
  $interaction-type: representative
) {
  @if not index(clickable representative, $interaction-type) {
    @error "Interaction type must be either `clickable` or `representative`.";
  }

  #{$star-element} {
    display: inline-block;
    float: left;
    width: $star-size;
    height: $star-size;
    border: 0;
    text-indent: -9999px;
    outline: none;
    background: get-icon(full, $rating-color-empty);

    @if $interaction-type == clickable {
      cursor: pointer;
      transition: background 0.25s ease;

      // Override background images on hover state
      &:hover,
      &:hover ~ #{$star-element} {
        background: get-icon(full, $rating-color-empty) !important;
      }
    }
  }

  // Override background images on hover state
  @if $interaction-type == clickable {
    &:hover {
      #{$star-element} {
        background: get-icon(full, $rating-color-hover) !important;
      }
    }
  }

  @each $rating-value in rating-values() {
    // Get the next higher integer.
    $rating-value-ceil: ceil($rating-value);

    &[data-rating-value='#{$rating-value}'] {
      #{$star-element}:nth-child(-n + #{$rating-value-ceil}) {
        background: get-icon(full, $rating-color-full);
      }

      #{$star-element}:nth-child(#{$rating-value-ceil}) {
        // Evaluate which fraction of a star this value is and add the proper background
        @if str-slice('#{$rating-value}', 2, 4) == '.25' {
          background: get-icon(quarter, $rating-color-full),
            get-icon(full, $rating-color-empty);
        } @else if str-slice('#{$rating-value}', 2, 4) == '.5' {
          background: get-icon(half, $rating-color-full),
            get-icon(full, $rating-color-empty);
        } @else if str-slice('#{$rating-value}', 2, 4) == '.75' {
          background: get-icon(three-quarters, $rating-color-full),
            get-icon(full, $rating-color-empty);
        }
      }
    }
  }
}

/*
 * General styles.
 * Not necessary for the component to work
*/

/// Convert to EMs function
/// @param {number} target - The value to be converted
/// @param {number} context [$msuxf-font-size] The base font size
/// @return {em} value
@function toem($target, $context: 16px) {
  @if $target == 0 {
    @return 0;
  }

  @return calc($target / $context) + 0em;
}

.c-rating {
  @include c-rating(toem(20px), button, clickable);

  &--small {
    font-size: 70%;
  }

  &--big {
    font-size: 150%;
  }
}
</style>
