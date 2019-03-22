<template>
  <nav
    id="nav"
    class="bg-black p-4"
  >
    <div class="flex items-center justify-between max-w-lg mx-auto">
      <router-link to="/" class="text-grey-light hover:text-white mr-2">Home</router-link>
      <router-link to="/recipes" class="text-grey-light hover:text-white mr-2">Recipes</router-link>
      <router-link to="/about" class="text-grey-light hover:text-white mr-2">About</router-link>

      <search></search>
    </div>
  </nav>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'NavMain',
  components: {
    Search,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
