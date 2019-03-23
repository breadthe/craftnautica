<template>
  <input type="text" v-model="search" class="search flex-1 w-4/5 sm:w-full mt-4 sm:mt-0" placeholder="Search...">
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
      set(srcStr) { this.$store.dispatch('setSrcStr', srcStr); },
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
