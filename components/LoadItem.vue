<template>
  <div v-for="ProductData in appStore.dataID">
    <h5
      id="drawer-right-label"
      class="
        flex-row flex-col
        items-center
        mb-4
        text-base
        font-semibold
        text-gray-500
      "
    >
      <!--Product Name-->
      <div v-if="appStore.finishLoading == 0">
        <div role="status" class="max-w-sm animate-pulse">
          <div
            class="h-2.5 bg-gray-200 rounded-full bg-gray-200 w-52 h-[12px]"
          ></div>
        </div>
      </div>
      <div v-else>
        {{ ProductData.product_name }}
      </div>
      <div v-if="appStore.finishLoading == 0">
        <div role="status" class="max-w-sm animate-pulse">
          <div
            class="
              h-2.5
              bg-gray-200
              rounded-full
              dark:bg-gray-200
              w-60
              mt-2
              h-[12px]
            "
          ></div>
        </div>
      </div>
      <div class="flex" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4 mr-0.5 mt-[5.0px] flex"
        >
          <path
            fill-rule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clip-rule="evenodd"
          />
        </svg>
        last updated {{ relativeDate(ProductData.last_updated) }} ago
      </div>
    </h5>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      <LoadItemGallery />
    </p>
    <p v-if="appStore.finishLoading == 1">
      <template v-for="(item, key, index) in ProductData.store_data">
        <div
          id="alert-additional-content-5"
          class="p-4 border border-gray-300 rounded-lg bg-gray-50"
          role="alert"
        >
          <div class="flex items-center">
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="green"
                class="w-[20px] h-[20px] mt-[1px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              {{ item.store }}
            </h3>
          </div>
          <div class="mt-2 mb-4 text-sm text-gray-800">
            <span
              class="
                text-md
                font-semibold
                px-2.5
                py-0.5
                rounded
                bg-blue-200
                text-blue-800
              "
            >
              {{
                Number(item.price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
              }}
            </span>
            <span
              class="
                text-md
                font-semibold
                px-2.5
                py-0.5
                rounded
                bg-blue-200
                text-blue-800
                ml-2
              "
            >
              Reviews: {{ item.reviews }}
            </span>
            <span
              class="
                text-md
                font-semibold
                px-2.5
                py-0.5
                rounded
                bg-blue-200
                text-blue-800
                ml-2
              "
            >
              Rating: {{ item.rating }}
            </span>
          </div>
          <div class="flex">
            <button
              type="button"
              class="
                text-white
                bg-gray-700
                hover:bg-gray-800
                focus:ring-4 focus:outline-none focus:ring-gray-300
                font-medium
                rounded-lg
                text-xs
                px-3
                py-1.5
                mr-2
                text-center
                inline-flex
                items-center
                dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800
              "
            >
              <svg
                aria-hidden="true"
                class="-ml-0.5 mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Purchase
            </button>
          </div>
        </div>
      </template>
    </p>
  </div>
</template>

<script setup>
//import Store Data
import { useAppStore } from '~/store/app';
import $ from 'jquery';

//set Store as a Constant
const appStore = useAppStore();

const supabase = useSupabaseClient();

watch(
  () => appStore.storeID,
  async () => {
    // added async keyword here
    if (appStore.storeID > 0) {
      const { data } = await supabase
        .from('productinfo1')
        .select('*')
        .eq('id', appStore.storeID); // added the value of storeID to the query
      appStore.updateDataID(data);
      console.log(appStore.storeID);
    }
  }
);
</script>
