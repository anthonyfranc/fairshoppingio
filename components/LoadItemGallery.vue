<template>
  <main class="mx-auto max-w-7xl">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <!-- Product -->
      <div class="grid grid-cols-1 items-start">
        <!-- Image gallery -->
        <div class="flex flex-col-reverse">
          <!-- Image selector -->
          <div
            class="
              mx-auto
              mt-6
              w-full
              max-w-2xl
              lg:max-w-none
            "
          >
            <div
              class="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              <button
                v-on:click="toggleTabs(1)"
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
                <span class="sr-only"> Angled view </span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    openTab == 1
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

              <button
                v-on:click="toggleTabs(2)"
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
                <span class="sr-only"> Angled view </span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    openTab == 2
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
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                alt="Angled front view with bag zipped and handles upright."
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg"
                alt="Angled front view with bag zipped and handles upright."
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>
          <!--End of Image on Top-->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'pink-tabs',
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
