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
    <p v-if="appStore.finishLoading == 1" class="mt-3 mb-3">
      <template v-for="(item, key, index) in ProductData.store_data">
        <div
          id="alert-additional-content-5"
          class="p-4 border border-gray-300 rounded-lg bg-gray-50"
          role="alert"
        >
          <div class="flex items-center">
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium text-gray-800 flex items-center">
              {{ item.store }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                class="w-[20px] h-[20px] mt-0.5 ml-0.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="-ml-0.5 mr-2 h-5 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
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
