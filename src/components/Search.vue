<template>
  <section class="flex justify-center w-full">
    <input type="text" v-model="search" class="search flex-grow" placeholder="Search...">
  </section>
</template>

<script>
export default {
  name: 'Search',
  props: {
  },
  data: () => ({
  }),
  computed: {
    search: {
      set(srcStr) { this.$store.dispatch('update', srcStr); },
      get() { return this.$store.state.search; },
    },
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
