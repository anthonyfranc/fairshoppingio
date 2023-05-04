<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
onMounted(() => {
  const colorMode = useColorMode();
  //we prefer light mode, but users are able to switch. Since we use SSR one reload the selected user color will still exist.
  colorMode.preference = 'light';
});
const route = useRoute();
watch(
  () => route.params,
  async () => {
    if (route.params.id) {
      //we are hiding the backdrop on /products/:id
      $('.hs-overlay-backdrop').hide();
    } else {
      //we are going to show backdrop if we go back to main page, since we use keep-alive this will work.
      $('.hs-overlay-backdrop').show();
    }
  }
);
</script>
