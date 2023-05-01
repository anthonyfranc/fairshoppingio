<meta name="viewport" content= "width=device-width, initial-scale=1.0">
<template>
<Header />
<div id="hs-overlay-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-sm w-full z-[60] bg-white border-l hidden" tabindex="-1"
style="overflow:scroll;">
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
const appLoaded = ref(false);
// initialize components based on data attribute selectors
onMounted(() => {
  appLoaded.value = true;
  let startimg = new Image();
  startimg.src = 'https://via.placeholder.com/160x160/d1d5db/d1d5db';
});
</script>
