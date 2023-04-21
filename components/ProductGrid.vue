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
          class="
            relative
            overflow-hidden
            bg-white
            border border-gray-200
            rounded-md
            group
          "
          v-for="ProductData in data"
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
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
            <div class="aspect-w-1 aspect-h-1">
              <img
                class="
                  object-scale-down
                  w-full
                  h-full
                  top-5
                  relative
                  content-center
                "
                :src="
                  ProductData.Image + '&tr=h-160,w-160,cm-pad_resize,bg-fff'
                "
                alt=""
              />
            </div>
            <div class="px-4 py-4">
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
      </div>
      <!--Show more Button-->
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-2/5 h-px my-8 bg-gray-200 border-0" />
        <span
          class="
            absolute
            px-6
            font-medium
            text-gray-900
            -translate-x-1/2
            left-1/2
            bg-slate-50
            capitalize
          "
        >
          <button
            type="button"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              font-medium
              rounded-md
              text-sm
              px-5
              py-1.5
              mr-2
              mb-2
              dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none
              dark:focus:ring-blue-800
              capitalize
              flex
              pr-2
            "
          >
            Show more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 pr-0.5 ml-1.5"
            >
              <path
                fill-rule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
//import Store Data
import { useAppStore } from '~/store/app';

//Supabase stuff
const supabase = useSupabaseClient();
const { data, error } = await supabase.from('productinfo1').select();
console.log(error);
//set Store as a Constant
const appStore = useAppStore();

watch(
  () => appStore.storeID,
  () => {
    // added async keyword here
    if (appStore.storeID > 0) {
      appStore.updateDataID(0);
    }
  }
);
</script>
