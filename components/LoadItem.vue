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
      <LazyLoadItemGallery />
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
        .from('productinfo')
        .select('*')
        .eq('id', appStore.storeID); // added the value of storeID to the query
      appStore.updateDataID(data);
      console.log(appStore.storeID);
    }
  }
);
</script>
