<meta name="viewport" content= "width=device-width, initial-scale=1.0">
<template>
<div v-if="firstVisit?.value == 1">
<div id="hs-vertically-centered-modal" class="hs-overlay load-modal hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="p-4 overflow-y-auto">
        <p class="text-gray-800 dark:text-gray-400">
          This is a wider card with supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<Header />
<div id="hs-overlay-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-sm w-full w-full z-[60] bg-white border-l hidden" tabindex="-1">
   <LoadItem/>
</div>
  <!--End of Drawer-->
  <div class="mx-auto max-w-7xl mt-5">
    <ProductGrid />
  </div>
  <!--End Shadow-->
  <Footer/>
</template>
<script setup lang="ts">
const firstVisit = useCookie(
  'isfirstVisit',
  {
    default: () => ({ value: 1 }),
    watch: 'true',
    //Chrome Does not like values more than 400 days
    maxAge: '1707109200',
  }
)
if (process.client) { 
      document.querySelectorAll('.load-modal').forEach($overlayEl => {
        HSOverlay.open($overlayEl)
        
      })
  }
const appLoaded = ref(false);
// initialize components based on data attribute selectors
onMounted(() => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
  appLoaded.value = true;
  let startimg = new Image();
  startimg.src = 'https://via.placeholder.com/160x160/d1d5db/d1d5db';
});
</script>
<style type="css">
.h-screen {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
}
</style>
