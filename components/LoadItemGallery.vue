<template>
  <div v-if="loading == false">
    <div
      role="status"
      class="flex-row flex-col max-w-sm p-4 animate-pulse md:p-1"
    >
      <div
        class="flex items-center justify-center h-96 mb-4 bg-gray-300 rounded"
      >
        <svg
          class="w-full h-12 text-gray-200 dark:text-gray-600"
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
      <div class="flex grid grid-cols-4 gap-2">
        <span v-for="i in 4">
          <div
            class="
              flex
              items-center
              justify-center
              h-24
              w-16
              bg-gray-300
              rounded
            "
          >
            <svg
              class="flex w-6 h-6 text-gray-200 dark:text-gray-600"
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
        </span>
      </div>
    </div>
  </div>
  <main
    class="mx-auto max-w-7xl"
    v-for="ProductData in data"
    v-if="loading == true"
  >
    <div id="image_main" class="mx-auto max-w-2xl lg:max-w-none">
      <!-- Product -->
      <div class="grid grid-cols-1 items-start">
        <!-- Image gallery -->
        <div class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 w-full max-w-3xl lg:max-w-none">
            <div
              class="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              <button
                v-for="(item, key, index) in ProductData.images"
                @click="toggleTabs(item.id)"
                class="
                  relative
                  flex
                  h-24
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  text-sm
                  font-medium
                  uppercase
                  text-gray-900
                  hover:bg-gray-50
                "
                aria-controls="tabs-2-panel-1"
                role="tab"
                type="button"
              >
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="item.image_url"
                    alt=""
                    class="h-full w-full object-cover object-scale-down"
                    loading="lazy"
                  />
                </span>
                <span
                  :class="[
                    openTab == item.id
                      ? 'focus:ring focus:ring-opacity-50 focus:ring-offset-4'
                      : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                >
                </span>
                <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                <span
                  class="
                    ring-transparent
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-md
                    ring-2 ring-offset-2
                  "
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          <!--End of Image Selector-->

          <!--Image Shown on Top-->
          <div class="aspect-w-1 aspect-h-1 w-full">
            <!-- Tab panel, show/hide based on tab state. -->
            <div
              v-for="(item, key, index) in ProductData.images"
              v-bind:class="{
                hidden: openTab !== item.id,
                block: openTab === item.id,
              }"
            >
              <img
                :src="item.image_url"
                alt="Angled front view with bag zipped and handles upright."
                class="
                  h-96
                  w-full
                  object-scale-down object-center
                  rounded-xl
                  p-3
                "
                loading="lazy"
              />
            </div>
          </div>
          <!--End of Image on Top-->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
//import Store Data
import $ from 'jquery';
import { useAppStore } from '~/store/app';

//set Store as a Constant
const appStore = useAppStore();
const props = defineProps({
  startingID: {
    type: Number,
  },
});

const openTab = ref(1);
const loading = ref(false);

function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}

const supabase = useSupabaseClient();

const { data } = await supabase
  .from('productinfo_testv13')
  .select('images')
  .eq('id', appStore.storeID); // added the value of storeID to the query

openTab.value = data[0]['images'][0]['id'];

setTimeout(function () {
  loading.value = true;
  //reset Store to help Skeleton Loading look better
  appStore.reset();
}, 850);
</script>
