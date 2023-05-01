<template>
<div v-if="firstVisit?.value == 1">
<div id="hs-vertically-centered-modal" class="hs-overlay load-modal hidden w-full h-full fixed top-0 left-0 z-[60] bg-gray-900 bg-opacity-90 ark:border-gray-700" tabindex="-1">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div class="bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="p-4 overflow-y-auto">
          <!--Logo-->
          <div class="text-center pb-5">
            <span
              style="
                font-size: 29px;
                font-weight: bold;
                font-family: 'Urbanist', sans-serif;
              "
              class="dark:text-white text-gray-700"
            >
              FairShopping</span
            >
            <span
              style="
                color: rgb(75, 152, 108);
                font-size: 29px;
                font-weight: bold;
                font-family: 'Urbanist', sans-serif;
              "
              >.io</span
            >
          </div>
          <!--Logo-->
        <p class="flex justify-center items-center">
        <img class="w-5/6" src="https://ik.imagekit.io/offershackio/undraw_festivities_tvvj.svg?updatedAt=1682903516888"/>
        </p>
        <p class="text-center pt-5">
          <h3 class="text-base font-semibold leading-6 text-gray-900 text-center">
          Welcome to FairShopping.io
          </h3>
        </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
          Continue
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const firstVisit = useCookie('isfirstVisit', {
  default: () => ({ value: 1 }),
  watch: 'true',
  //Chrome Does not like values more than 400 days
  maxAge: '1707109200',
});
if (process.client) {
  //we are init the modal on load, once the client has processed.
  document.querySelectorAll('.load-modal').forEach(($overlayEl) => {
    HSOverlay.open($overlayEl);
    HSOverlay.on('open', ($overlayEl) => {
      //display body scroll
      $('body').addClass('fixed w-full');
    });
    HSOverlay.on('close', ($overlayEl) => {
      //enable body scroll
      $('body').removeClass('fixed w-full');
    });
  });
}
onMounted(() => {
  const colorMode = useColorMode();
  //we prefer light mode, but users are able to switch. Since we use SSR one reload the selected user color will still exist.
  colorMode.preference = 'light';
});
</script>
