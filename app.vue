<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const colorMode = useColorMode();
//we prefer light mode, but users are able to switch. Since we use SSR one reload the selected user color will still exist.
colorMode.preference = 'light';
</script>
