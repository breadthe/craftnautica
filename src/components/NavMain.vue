<template>
  <nav
    id="nav"
    class="bg-black p-4"
  >
    <router-link to="/" class="text-grey-light hover:text-white">Home</router-link> |
    <router-link to="/recipes" class="text-grey-light hover:text-white">Recipes</router-link> |
    <router-link to="/recipes2" class="text-grey-light hover:text-white">Recipes2</router-link> |
    <router-link to="/about" class="text-grey-light hover:text-white">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMain',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
