<meta name="viewport" content= "width=device-width, initial-scale=1.0">
<template>
<Header />
<div id="hs-overlay-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-md w-full w-full z-[60] bg-white border-l hidden" tabindex="-1">
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
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
  appLoaded.value = true;
});
</script>
<style type="css">
.h-screen {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
}
</style>
