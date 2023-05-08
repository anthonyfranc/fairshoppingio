<template>
  <Header />
  <div class="mx-auto max-w-7xl mt-5">
    <!--Breadcrumb-->
    <ol
      class="flex items-center whitespace-nowrap min-w-0 pb-4"
      aria-label="Breadcrumb"
    >
      <li class="text-sm text-gray-600 dark:text-gray-400">
        <NuxtLink to="/" class="flex items-center hover:text-blue-600">
          Home
          <svg
            class="
              flex-shrink-0
              mx-3
              overflow-visible
              h-2.5
              w-2.5
              text-gray-400
              dark:text-gray-600
            "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </NuxtLink>
      </li>

      <li
        class="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page"
      >
        {{ data[0].product_name }}
      </li>
    </ol>
    <!--Breadcrumb-->
    <div class="bg-white border rounded">
      <div class="grid grid-cols-[19rem,8fr] p-12">
        <div>
          <main class="mx-auto max-w-7xl" v-for="ProductData in data">
            <div id="image_main" class="mx-auto max-w-2xl lg:max-w-none">
              <!-- Product -->
              <div class="grid grid-cols-1 items-start">
                <!-- Image gallery -->
                <div class="flex flex-col-reverse">
                  <!-- Image selector -->
                  <div class="mt-6 w-4/5 max-w-3xl lg:max-w-none">
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
                          h-12
                          cursor-pointer
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
                        <span
                          class="absolute inset-0 overflow-hidden rounded-md"
                        >
                          <img
                            :src="item.image_url"
                            alt=""
                            class="h-full w-full object-cover object-scale-down"
                          />
                        </span>
                        <span
                          :class="[
                            openTab == item.id
                              ? 'focus:ring focus:ring-opacity-50 focus:ring-offset-2 ring-green-700'
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
                  <div class="aspect-w-1 aspect-h-1 w-4/5">
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
                        class="h-[11rem] w-full object-scale-down rounded-xl"
                      />
                    </div>
                  </div>
                  <!--End of Image on Top-->
                </div>
              </div>
            </div>
          </main>
        </div>
        <!--Right Section-->
        <div>
          <h2
            class="
              mb-2
              text-xl
              font-semibold
              leading-none
              text-gray-900
              md:text-1xl
            "
          >
            {{ data[0].product_name }}
          </h2>
          <p
            class="
              mb-4
              text-xl
              font-semibold
              leading-none
              text-gray-800
              md:text-1xl
            "
          >
            <span
              v-if="
                data[0].current_price !== null &&
                data[0].current_price < data[0].previous_price_day
              "
            >
              <!--Show Previous price-->
              <span class="line-through">
                {{
                  Number(data[0].previous_price_day).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
              </span>
              <!-- End of Previous Price-->
              <!--Show Current Price-->
              <span class="text-green-600 pl-1">
                {{
                  Number(data[0].current_price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
              </span>
              <!--End of Current Price-->
            </span>
            <span v-else>
              {{
                Number(data[0].current_price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
              }}
            </span>
          </p>
          <dl>
            <dd
              class="
                mb-4
                leading
                font-light
                text-gray-500
                sm:mb-5
                dark:text-gray-400
              "
            >
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
          </dl>
          <!--Right Section-->
          <div class="grid grid-rows-1 grid-flow-col gap-3">
            <template v-for="(item, key, index) in data[0].store_data">
              <div
                id="alert-additional-content-5"
                class="
                  p-3
                  border border-gray-300
                  rounded-md
                  bg-gray-50
                  mb-4
                  relative
                "
                role="alert"
              >
                <img
                  class="absolute top-2 right-3 object-scale-down w-[6em] h-10"
                  :src="item.store_url"
                />
                <div class="flex items-center">
                  <span class="sr-only">Info</span>
                  <h3
                    class="text-lg font-medium text-gray-800 flex items-center"
                  >
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
          </div>
        </div>
      </div>
      <div class="bg-slate-50 rounded p-5">
        <div id="replybox"></div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
const supabase = useSupabaseClient();
const { data } = await supabase
  .from('productinfo1')
  .select('*')
  .eq('slug', useRoute().params.id);

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

openTab.value = data[0]['images'][0]['id'];
onMounted(() => {
  window.replybox = {
    site: 'POBODlPRVa',
  };
  const docHeadObj = document.getElementsByTagName('head')[0];
  const jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://cdn.getreplybox.com/js/embed.js';
  jqueryScript.defer = true;
  docHeadObj.appendChild(jqueryScript);
});
</script>
