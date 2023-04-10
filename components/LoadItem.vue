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
          class="p-3 border border-gray-300 rounded-md bg-gray-50 mb-4"
          role="alert"
        >
        <img 
        class="
        absolute
        right-7
        object-scale-down w-[5em] 
        h-10
        "
        :src="item.store_url"/>
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
          <div class="mt-2 mb-4 text-sm text-gray-800 flex">
            <span
              class="
                text-md
                font-semibold
                px-2.5
                py-0.5
                rounded
                bg-green-200
                text-black
                flex
                items-center
                bg-opacity-30
                border-[1.9px] border-green-500
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
                px-2
                py-0.5
                rounded
                bg-green-200
                text-black
                ml-2
                flex
                items-center
                bg-opacity-30
                border-[1.9px] border-green-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="red"
                class="w-4 h-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {{ Number(item.reviews).toLocaleString('en-US') }}
            </span>
            <span
              class="
                text-md
                font-semibold
                px-2.5
                py-0.5
                rounded
                bg-green-200
                text-black
                ml-2
                flex
                items-center
                bg-opacity-30
                border-[1.9px] border-green-500
              "
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              {{ item.rating }}
            </span>
          </div>
          <div class="flex">
            <button
              type="button"
              class="
                text-white
                hover:bg-blue-700
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
              "
              style="background: rgb(75, 152, 108)"
            >
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
