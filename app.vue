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
  //use first time access cookie to launch welcome modal.
  const firstVisit = useCookie('isFirstVisit', {
    default: () => ({ value: 1 }),
    watch: true,
    maxAge: '1707109200',
  });
});
</script>
