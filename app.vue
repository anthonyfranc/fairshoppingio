<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
onMounted(() => {
  const colorMode = useColorMode();
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkThemeMq.matches) {
    colorMode.preference = 'light';
  } else {
    colorMode.preference = 'light';
  }
});
</script>
