<template>
  <section class="bg-gray-50">
    <div class="mx-auto pl-12 pr-12 pt-6">
      <div
        class="
          grid grid-cols-1
          gap-4
          mt-0
          xs:grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          sxl:grid-cols-6
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
          <div class="absolute z-10 top-3 right-3">
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
              "
            >
            </button>
          </div>
          <div role="button" class="relative" @click="(appStore.updatefinishLoading(0)), (appStore.updateStoreID(ProductData.id))"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example" 
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
          >
            <div class="aspect-w-1 aspect-h-1">
              <img
                class="object-scale-down w-full h-full"
                :src="ProductData.Image"
                alt=""
              />
            </div>
            <div class="px-4 py-4">
              <span class="
               xs:text-md
               sm:text-xs
               md:text-xs
               lg:text-md
               xl:text-md
               2xl:text-sm
               font-semibold
               tracking-tight
               text-gray-900
               truncate block
               "
              >
                  {{ ProductData.product_name }}
                  <span class="absolute inset-0" aria-hidden="true"></span>
              </span>
              <div class="flex items-center -ml-0.5 mt-1">
              <svg aria-hidden="true" class="w-4 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
              </svg>
              <p class="ml-1 text-sm font-bold text-gray-900">{{ProductData.current_rating}}</p>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {{ ProductData.current_reviews }}
                </span>
              </div>
              <p class="mt-1.5">
              <span class="text-md font-semibold tracking-tight text-gray-900">
                {{
                  Number(ProductData.current_price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
                </span>
                <!--Analytics Stats Start-->
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
                <!--Stats End-->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
//import Store Data
import { useAppStore } from '~/store/app';

//Supabase stuff
const supabase = useSupabaseClient();
const { data, error } = await supabase.from('productinfo_testv13').select();

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
