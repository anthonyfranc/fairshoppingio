<template>
  <div v-for="ProductData in appStore.dataID">
    <h5
      id="drawer-right-label"
      class="
        flex-row
        flex-col
        items-center
        mb-4
        text-base
        font-semibold
        text-gray-500
        dark:text-gray-400
      "
    >
      <!--Product Name-->
      {{ ProductData.product_name }}
      <div>
        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-4 h-4 mr-0.5 flex"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                            clip-rule="evenodd"
                          />
                        </svg>
        Last Updated {{ relativeDate(ProductData.last_updated) }} ago
      </div>
    </h5>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our
      <a
        href="#"
        class="
          text-blue-600
          underline
          font-medium
          dark:text-blue-500
          hover:no-underline
        "
        >limited-time sale</a
      >
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked
      candidates and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <a
        href="#"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-center text-gray-900
          bg-white
          border border-gray-200
          rounded-lg
          focus:outline-none
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-4 focus:ring-gray-200
          dark:focus:ring-gray-700
          dark:bg-gray-800
          dark:text-gray-400
          dark:border-gray-600
          dark:hover:text-white
          dark:hover:bg-gray-700
        "
        >Learn more</a
      >
      <a
        href="#"
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-sm
          font-medium
          text-center text-white
          bg-blue-700
          rounded-lg
          hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-700
          focus:outline-none
          dark:focus:ring-blue-800
        "
        >Get access
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path></svg
      ></a>
    </div>
  </div>
</template>

<script setup>
//import Store Data
import { useAppStore } from '~/store/app';

//set Store as a Constant
const appStore = useAppStore();

const supabase = useSupabaseClient();

watch(
  () => appStore.storeID,
  async () => {
    // added async keyword here
    if (appStore.storeID > 0) {
      const { data } = await supabase
        .from('productinfo_testv12')
        .select('*')
        .eq('id', appStore.storeID); // added the value of storeID to the query
      appStore.updateDataID(data);
    }
  }
);
</script>
