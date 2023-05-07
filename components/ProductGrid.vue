<template>
  <section class="">
    <div class="mx-auto">
      <div
        class="
          grid grid-cols-1
          gap-5
          xs:grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          pb-5
          pl-3
          pr-3
        "
      >
        <div
          class="relative overflow-hidden group rounded-md"
          v-for="ProductData in returnData"
          v-cloak
        >
          <div class="absolute z-10 left-3 top-3">
            <button
              type="button"
              class="inline-flex items-center justify-center"
            >
              <template v-for="item in ProductData.category">
                <div v-if="item" class="flex">
                  <div
                    v-if="item == 'Electronics'"
                    class="
                      rounded-full
                      ring-2 ring-gray-200
                      p-1.5
                      relative
                      bg-amber-500
                    "
                    :data-tooltip-target="
                      'tooltip-electronics-' + ProductData.id
                    "
                  >
                    <div
                      :id="'tooltip-electronics-' + ProductData.id"
                      role="tooltip"
                      class="
                        absolute
                        z-30
                        invisible
                        inline-block
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-opacity
                        duration-300
                        bg-gray-900
                        rounded-lg
                        shadow-sm
                        opacity-0
                        tooltip
                        dark:bg-gray-700
                      "
                    >
                      Electronics
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div
                    v-if="item == 'Video Games'"
                    class="
                      rounded-full
                      ring-2 ring-gray-200
                      p-1.5
                      relative
                      bg-violet-600
                    "
                    :data-tooltip-target="
                      'tooltip-videogames-' + ProductData.id
                    "
                  >
                    <div
                      :id="'tooltip-videogames-' + ProductData.id"
                      role="tooltip"
                      class="
                        absolute
                        z-30
                        invisible
                        inline-block
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-opacity
                        duration-300
                        bg-gray-900
                        rounded-lg
                        shadow-sm
                        opacity-0
                        tooltip
                        dark:bg-gray-700
                        whitespace-nowrap
                      "
                    >
                      Video Games
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div
                    v-if="item == 'Entertainment'"
                    class="
                      rounded-full
                      ring-2 ring-gray-200
                      p-1.5
                      relative
                      bg-cyan-600
                    "
                    :data-tooltip-target="
                      'tooltip-entertainment-' + ProductData.id
                    "
                  >
                    <div
                      :id="'tooltip-entertainment-' + ProductData.id"
                      role="tooltip"
                      class="
                        absolute
                        z-30
                        invisible
                        inline-block
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-opacity
                        duration-300
                        bg-gray-900
                        rounded-lg
                        shadow-sm
                        opacity-0
                        tooltip
                        dark:bg-gray-700
                      "
                    >
                      Entertainment
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div
                    v-if="item == 'Smart Home'"
                    class="rounded-full ring-2 ring-gray-200 p-1.5 bg-rose-300"
                    :data-tooltip-target="'tooltip-smarthome-' + ProductData.id"
                  >
                    <div
                      :id="'tooltip-smarthome-' + ProductData.id"
                      role="tooltip"
                      class="
                        absolute
                        invisible
                        z-30
                        inline-block
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-opacity
                        duration-300
                        bg-gray-800
                        rounded-lg
                        shadow-sm
                        opacity-0
                        tooltip
                        dark:bg-gray-700
                        whitespace-nowrap
                      "
                    >
                      Smart Home
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
              </template>
            </button>
          </div>
          <div
            role="button"
            class="relative"
            @click="
              appStore.updatefinishLoading(0),
                appStore.updateStoreID(ProductData.id)
            "
            data-hs-overlay="#hs-overlay-right"
          >
            <div class="aspect-w-1 aspect-h-1 bg-gray-100 rounded-md">
              <img
                class="
                  object-scale-down
                  w-full
                  h-full
                  top-5
                  relative
                  content-center
                "
                :src="ProductData.Image + '&tr=h-160,w-160,cm-pad_resize'"
                rel="preload"
              />
            </div>
            <div class="px-4 py-4 bg-white">
              <span
                class="
                  text-md
                  font-semibold
                  tracking-tight
                  text-gray-900
                  truncate
                  block
                "
              >
                {{ ProductData.product_name }}
                <span class="absolute inset-0" aria-hidden="true"></span>
              </span>
              <div class="flex items-center -ml-0.5 mt-1">
                <svg
                  aria-hidden="true"
                  class="w-4 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <template v-if="ProductData.current_rating == null">
                  <p class="ml-1 text-sm font-bold text-gray-900">0</p>
                  <span
                    class="
                      bg-blue-100
                      text-blue-800 text-xs
                      font-semibold
                      mr-2
                      px-2.5
                      py-0.5
                      rounded
                      dark:bg-blue-200 dark:text-blue-800
                      ml-3
                    "
                  >
                    N/A
                  </span>
                </template>
                <template v-else>
                  <p class="ml-1 text-sm font-bold text-gray-900">
                    {{ ProductData.current_rating }}
                  </p>
                  <span
                    class="
                      bg-blue-100
                      text-blue-800 text-xs
                      font-semibold
                      mr-2
                      px-2.5
                      py-0.5
                      rounded
                      dark:bg-blue-200 dark:text-blue-800
                      ml-3
                    "
                  >
                    {{ ProductData.current_reviews }}
                  </span>
                </template>
              </div>
              <p class="mt-1.5">
                <span
                  class="text-md font-semibold tracking-tight text-gray-900"
                >
                  <span
                    v-if="
                      ProductData.current_price !== null &&
                      ProductData.current_price < ProductData.previous_price_day
                    "
                  >
                    <!--Show Previous price-->
                    <span class="line-through">
                      {{
                        Number(ProductData.previous_price_day).toLocaleString(
                          'en-US',
                          {
                            style: 'currency',
                            currency: 'USD',
                          }
                        )
                      }}
                    </span>
                    <!-- End of Previous Price-->
                    <!--Show Current Price-->
                    <span class="text-green-600 pl-1">
                      {{
                        Number(ProductData.current_price).toLocaleString(
                          'en-US',
                          {
                            style: 'currency',
                            currency: 'USD',
                          }
                        )
                      }}
                    </span>
                    <!--End of Current Price-->
                  </span>
                  <span v-else>
                    {{
                      Number(ProductData.current_price).toLocaleString(
                        'en-US',
                        {
                          style: 'currency',
                          currency: 'USD',
                        }
                      )
                    }}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <!--Before Data is loaded we are showing this-->
        <template v-if="!initLoad" v-for="n in 15">
          <div class="relative overflow-hidden bg-gray-300 rounded-md group">
            <div class="absolute z-10 left-3 top-2">
              <button
                type="button"
                class="inline-flex items-center justify-center"
              >
                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full w-8"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </div>
            <div>
              <div class="aspect-w-1 aspect-h-1">
                <div role="status" class="animate-pulse">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      bg-gray-300
                      object-scale-down
                      w-full
                      h-full
                      relative
                      content-center
                      mt-10
                    "
                  >
                    <img
                      class="
                        object-scale-down
                        w-full
                        h-full
                        relative
                        content-center
                      "
                      src="https://via.placeholder.com/160x160/d1d5db/d1d5db"
                    />
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div class="px-2 py-4">
                <span
                  class="
                    text-md
                    font-semibold
                    tracking-tight
                    text-gray-900
                    truncate
                    block
                  "
                >
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-48"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </span>
                <div class="flex items-center mt-1">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-12"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <p class="ml-1 text-sm font-bold text-gray-900"></p>
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-12"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                <p class="">
                  <span
                    class="text-md font-semibold tracking-tight text-gray-900"
                  >
                    <div role="status" class="max-w-sm animate-pulse">
                      <div
                        class="h-2.5 bg-gray-200 rounded-full w-34 mt-1"
                      ></div>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </template>
        <!--end of before data-->
        <!--Before Data is loaded we are showing this-->
        <template v-if="load == true" v-for="n in left">
          <div class="relative overflow-hidden bg-gray-300 rounded-md group">
            <div class="absolute z-10 left-3 top-2">
              <button
                type="button"
                class="inline-flex items-center justify-center"
              >
                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full w-8"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </div>
            <div>
              <div class="aspect-w-1 aspect-h-1">
                <div role="status" class="animate-pulse">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      bg-gray-300
                      object-scale-down
                      w-full
                      h-full
                      relative
                      content-center
                      mt-10
                    "
                  >
                    <img
                      class="
                        object-scale-down
                        w-full
                        h-full
                        relative
                        content-center
                      "
                      src="https://via.placeholder.com/160x160/d1d5db/d1d5db"
                    />
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div class="px-2 py-4">
                <span
                  class="
                    text-md
                    font-semibold
                    tracking-tight
                    text-gray-900
                    truncate
                    block
                  "
                >
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-48"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </span>
                <div class="flex items-center mt-1">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-12"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <p class="ml-1 text-sm font-bold text-gray-900"></p>
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-12"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                <p class="">
                  <span
                    class="text-md font-semibold tracking-tight text-gray-900"
                  >
                    <div role="status" class="max-w-sm animate-pulse">
                      <div
                        class="h-2.5 bg-gray-200 rounded-full w-34 mt-1"
                      ></div>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </template>
        <!--end of before data-->
      </div>
      <div
        v-if="!returnData && end == false"
        class="inline-flex items-center justify-center w-full"
      >
        <button
          type="button"
          class="
            bg-white
            border
            shadow-sm
            text-gray-600
            font-medium
            rounded-lg
            text-sm
            px-5
            py-3
            text-center
            mr-2
            inline-flex
            items-center
          "
        >
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-3 bg-gray-200 rounded-full w-14"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <span class="absolute inset-0" aria-hidden="true"></span>
        </button>
      </div>
      <!--Show more Button-->
      <div
        v-if="returnData && end == false"
        class="inline-flex items-center justify-center w-full"
      >
        <button
          @click="supaPagination"
          type="button"
          class="
            bg-blue-600
            border
            shadow-sm
            text-white
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            mr-2
            inline-flex
            items-center
            hover:bg-blue-500
          "
        >
          Show More
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
//import Store Data
import { useAppStore } from '~/store/app';

const supabase = useSupabaseClient();

//we are fetching count for rows in database
const { count } = await supabase
  .from('productinfo1')
  .select('*', { count: 'exact' });

const to = ref(14);
const load = ref(false);
const supaPagination = () => ((to.value = to.value + 5), (load.value = true));
const returnData = ref(null);
const end = ref(false);
const initLoad = ref(false);
const left = ref();

watch(
  () => to.value,
  async () => {
    if (to.value == 14) {
      to.value = to.value;
    } else {
      /*
      if to.value + 5 (because the maximum of items per grid are 5),
      is equal or less than the total number of count then we will let the to.value+5 process
    */
      if (to.value > 14 && to.value < count) {
        to.value = to.value;
        left.value = 5;
        //console.log('left.value', left.value);
      } else {
        if (to.value > 14 && to.value > count) {
          /*
            if to.value+5 is greater than the total count we need to figure out the difference between the two
          */
          left.value = count - (to.value - 5 + 1);
          to.value = to.value - 5 + 1 + left.value;
          //console.log('left.value', left.value);
        } else {
          to.value = to.value;
        }
      }
    }
    const { data, error } = await supabase
      .from('productinfo1')
      .select('*', { count: 'exact' })
      .range(0, to.value);
    if (to.value && to.value <= count) {
      setTimeout(function () {
        if (to.value == 14) {
          load.value = true;
          returnData.value = data;
          load.value = false;
          initLoad.value = true;
        } else {
          //preload images this is to prevent flickering as previously the image is loaded on the DOM.
          data.forEach((number, index) => {
            let img = new Image();
            img.src = `${number.Image}&tr=h-160,w-160,cm-pad_resize`;
          });
          setTimeout(function () {
            returnData.value = data;
            load.value = false;
          }, 1000);
        }
      }, 500);
      //we are using to.value + 1 to set the value end.value = true once the last item has loaded
      if (to.value + 1 >= count) {
        //we are emting this to let the DOM know there are no more items to load.
        end.value = true;
      }
      //preload images this is to prevent flickering as previously the image is loaded on the DOM.
      data.forEach((number, index) => {
        let img = new Image();
        img.src = `${number.Image}&tr=h-160,w-160,cm-pad_resize`;
      });
    }
  },
  { immediate: true }
);

//set Store as a Constant
const appStore = useAppStore();

watch(
  () => appStore.storeID,
  () => {
    // added async keyword here
    if (appStore.storeID > 0) {
      appStore.updateDataID(0);
      //console.log(document.getElementById('drawer-right-example'));
    }
  }
);
</script>
<style>
.delay-display-none-leave-active {
  transition: opacity 0.3s;
}
.delay-display-none-leave-to {
  opacity: 1;
}
</style>
