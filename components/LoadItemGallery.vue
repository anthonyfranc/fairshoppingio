<template>
  <main
    class="mx-auto max-w-7xl"
    v-for="ProductData in data"
    :storeID="storeID"
    :startingID="startingID"
  >
    <div
      class="mx-auto max-w-2xl lg:max-w-none"
      :v-bind="(startingID = ProductData['images'][0].id)"
    >
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
                  h-40
                  w-full
                  object-scale-down object-center
                  sm:rounded-lg
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
const props = defineProps({
  storeID: {
    type: Number,
  },
  startingID: {
    type: Number,
  },
});

const openTab = ref(1);

onMounted(() => {
  openTab.value = props.startingID; // <div>
});
//openTab.value = 2;

const supabase = useSupabaseClient();

const { data, error } = await supabase
  .from('productinfo_testv13')
  .select('images')
  .eq('id', props.storeID);

function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
//:startingID="(openTab = ProductData['images'][0].id)"
</script>
