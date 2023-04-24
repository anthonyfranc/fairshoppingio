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
          v-for="ProductData in returnData"
          v-if="initLoad"
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
                rel="preload"
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
        <!--Before Data is loaded we are showing this-->
        <template v-if="!initLoad" v-for="n in 15">
          <div
            class="
              relative
              overflow-hidden
              bg-white
              border border-gray-200
              rounded-md
              group
            "
          >
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
        <template v-if="load == true" v-for="n in 5">
          <div
            class="
              relative
              overflow-hidden
              bg-white
              border border-gray-200
              rounded-md
              group
            "
          >
            <div class="absolute z-10 left-3 top-0">
              <button
                type="button"
                class="inline-flex items-center justify-center"
              >
                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full w-12"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </div>
            <div>
              <div class="aspect-w-1 aspect-h-1 mt-1">
                <div
                  role="status"
                  class="
                    animate-pulse
                    space-y-0 space-x-8
                    flex
                    items-center
                    md:h-[19.9rem]
                    lg:h-[19rem]
                    sm:h-[22.4rem]
                    h-[38rem]
                    p-3
                  "
                >
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      w-full
                      bg-gray-300
                      rounded
                      sm:w-96
                      object-scale-down
                      w-full
                      h-full
                      top-5
                      relative
                      content-center
                    "
                  >
                    <svg
                      class="w-12 h-12 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                      />
                    </svg>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
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
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full w-48 mt-5"></div>
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
                        class="h-2.5 bg-gray-200 rounded-full w-48 mt-1"
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
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-2
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              inline-flex
              items-center
            "
          >
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-48"></div>
              <span class="sr-only">Loading...</span>
            </div>
            <span class="absolute inset-0" aria-hidden="true"></span>
          </button>
        </span>
      </div>
      <!--Show more Button-->
      <div
        v-if="returnData && end == false"
        class="inline-flex items-center justify-center w-full"
      >
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
            @click="supaPagination"
            type="button"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-2
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              inline-flex
              items-center
            "
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-2 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Show More Products
          </button>
        </span>
      </div>
    </div>
  </section>
</template>
<script setup>
//import Store Data
import { useAppStore } from '~/store/app';
import { Drawer } from 'flowbite';
import { onMounted } from 'vue';
import { initDrawers, initTooltips, initDropdowns } from 'flowbite';

// initialize components based on data attribute selectors
onUpdated(() => {
  initDrawers();
  initTooltips();
  initDropdowns();
});

const supabase = useSupabaseClient();
const to = ref(14);
const load = ref(false);
const supaPagination = () => ((to.value = to.value + 5), (load.value = true));
const returnData = ref(null);
const end = ref(false);
const initLoad = ref(false);

//we are fetching count for rows in database
const { count } = await supabase
  .from('productinfo1')
  .select('*', { count: 'exact' });

watch(
  () => to.value,
  async () => {
    // added async keyword here
    if (to.value && to.value <= count) {
      const { data, error } = await supabase
        .from('productinfo1')
        .select('*', { count: 'exact' })
        .range(0, to.value);
      //preload images this is to prevent flickering as previously the image is loaded on the DOM.
      data.forEach((number, index) => {
        let img = new Image();
        img.src = `${number.Image}&tr=h-160,w-160,cm-pad_resize,bg-fff`;
      });
      setTimeout(function () {
        if (to.value == 14) {
          load.value = true;
          returnData.value = data;
          load.value = false;
          initLoad.value = true;
        } else {
          setTimeout(function () {
            returnData.value = data;
            load.value = false;
          }, 1000);
        }
      }, 1000);
      //we are using to.value + 1 to set the value end.value = true once the last item has loaded
      if (to.value + 1 >= count) {
        //we are emting this to let the DOM know there are no more items to load.
        end.value = true;
      }
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
