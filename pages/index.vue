<meta name="viewport" content= "width=device-width, initial-scale=1.0">
<template>
<Header />
  <!-- drawer init and toggle -->
  <!-- drawer component -->
  <div
    :id="'drawer-right-example'"
    class="
      fixed
      top-0
      right-0
      z-40
      h-full
      p-4
      overflow-y-auto
      transition-transform
      translate-x-full
      bg-white
      w-96
    "
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <button
      type="button"
      data-drawer-hide="drawer-right-example"
      aria-controls="drawer-right-example"
      class="
        text-gray-400
        bg-transparent
        hover:bg-gray-200 hover:text-gray-900
        rounded-lg
        text-sm
        p-1.5
        absolute
        top-2.5
        right-2.5
        inline-flex
        items-center
        dark:hover:bg-gray-600 dark:hover:text-white
      "
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <LoadItem />
  </div>
  <!--End of Drawer-->
  <div class="mx-auto max-w-7xl mt-5 pb-10">
    <ProductGrid />
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import { Drawer } from 'flowbite';
import { onMounted } from 'vue';
import {
  initDrawers,
  initTooltips,
  initDropdowns,
  initFlowbite
  
} from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initDrawers();
  initTooltips();
  initDropdowns();
  initFlowbite();
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
});
</script>
<style type="css">
.bg-gray-900 {
  background-color: #111827;
  opacity: 0.8;
}
.h-screen {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
}
</style>
