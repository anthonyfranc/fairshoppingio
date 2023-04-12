<template>
  <div v-if="loading == false" v-for="ProductData in data">
    <div role="status" class="flex-row flex-col animate-pulse">
      <div
        class="
          flex
          items-center
          justify-center
          mb-2
          bg-gray-200
          rounded
          aspect-w-1 aspect-h-1
          w-full
        "
      >
        <img
          :src="ProductData.images[0].image_url"
          alt="Angled front view with bag zipped and handles upright."
          class="
            h-[18em]
            w-full
            object-scale-down object-center
            rounded-xl
            p-3
            opacity-0
          "
        />
      </div>
      <div
        class="
          flex
          grid grid-cols-4
          gap-5
          mx-auto
          mt-3
          w-full
          max-w-3xl
          lg:max-w-none
        "
      >
        <span v-for="(item, key, index) in data[0]['images']">
          <!--We are hiding images while the rest loads so the brower is able to cache the images-->
          <div
            class="
              flex
              items-center
              justify-center
              bg-gray-200
              rounded
              aspect-w-1 aspect-h-1
              w-full
              h-24
            "
          >
            <img
              :src="item.image_url"
              class="h-full w-full object-cover object-scale-down opacity-0"
            />
          </div>
        </span>
      </div>
    </div>
  </div>
  <main
    class="mx-auto max-w-7xl"
    v-if="loading == true"
    v-for="ProductData in data"
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
                  h-[18em]
                  w-full
                  object-scale-down object-center
                  rounded-xl
                  p-3
                "
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
import { Drawer } from 'flowbite';

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
  .from('productinfo1')
  .select('images')
  .eq('id', appStore.storeID); // added the value of storeID to the query

openTab.value = data[0]['images'][0]['id'];

setTimeout(function () {
  appStore.updatefinishLoading(1);
  //reset Store to help Skeleton Loading look better
  appStore.reset();
  loading.value = true;
}, 1000);
</script>
