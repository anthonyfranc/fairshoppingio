<template>
  <div v-for="ProductData in appStore.dataID">
    <div class="flex justify-between items-center py-3 px-3 border-b">
      <h5
        class="
          flex-row flex-col
          items-center
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
          <div role="status" class="max-w-sm animate-pulse pb-[13px]">
            <div
              class="
                h-[15px]
                bg-gray-200
                rounded-full
                dark:bg-gray-200
                w-60
                mt-2
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
      <button
        type="button"
        class="
          inline-flex
          flex-shrink-0
          justify-center
          items-center
          h-8
          w-8
          rounded-md
          text-gray-500
          hover:text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          focus:ring-offset-2
          focus:ring-offset-white
          text-sm
        "
        data-hs-overlay="#hs-overlay-right"
      >
        <span class="sr-only">Close modal</span>
        <svg
          class="w-3.5 h-3.5"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <p class="m-4 text-sm text-gray-500 dark:text-gray-400">
      <LoadItemGallery />
    </p>
    <p v-if="appStore.finishLoading == 1" class="m-2">
      <template v-for="(item, key, index) in ProductData.store_data">
        <div
          id="alert-additional-content-5"
          class="p-3 border border-gray-300 rounded-md bg-gray-50 mb-4"
          role="alert"
        >
          <img
            class="absolute right-7 object-scale-down w-[5em] h-10"
            :src="item.store_url"
          />
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
      <!-- More Details Button-->
      <nuxt-link
        :to="'products/' + ProductData.slug"
        class="
          bg-[#4b986c]
          hover:bg-green-700
          text-white
          font-bold
          py-2
          px-4
          border-b-4 border-green-700
          rounded
          w-full
          flex
          place-content-center
        "
      >
        More Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </nuxt-link>
      <!--End of button-->
    </p>
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
        .from('productinfo1')
        .select('*')
        .eq('id', appStore.storeID); // added the value of storeID to the query
      appStore.updateDataID(data);
      console.log(appStore.storeID);
    }
  }
);
</script>
