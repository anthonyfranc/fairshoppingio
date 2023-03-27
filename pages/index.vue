<template>
  <div>
    <NavBar />
    <LazyProductGrid />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showStore() {
      this.show = true;
    },
  },
};
</script>
