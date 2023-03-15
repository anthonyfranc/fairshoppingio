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
              <h3 class="mt-2 text-sm font-medium text-gray-900">
                <NuxtLink :to="`/product/${ProductData.id}`" title="">
                  {{ ProductData.Name }}
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </NuxtLink>
              </h3>
              <div class="flex items-center">
                <div class="flex items-center space-x-px">
                  <!--Ratings-->
                  <star-rating
                    v-model:rating="ProductData.current_rating"
                    :round-start-rating="false"
                    :star-size="14"
                    :show-rating="false"
                  ></star-rating>
                </div>
              </div>
              <p class="mt-0.5 text-xs sm:text-sm font-medium text-gray-400">
                {{ ProductData.current_reviews }} Reviews
              </p>
              <p class="mt-5 text-sm font-bold text-gray-900">
                {{
                  Number(ProductData.current_price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
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
              <svg
                class="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
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

const { data } = await supabase.from('productinfov7').select('*');
</script>
