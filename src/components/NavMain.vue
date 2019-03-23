<template>
  <nav
    id="nav"
    class="bg-black p-4"
  >
    <div class="flex items-center justify-between max-w-lg mx-auto">

      <!-- Left side -->
      <div class="flex-1 flex items-center">
        <router-link to="/" class="flex items-center justify-center w-12 h-12 p-2 mr-8 rounded-full bg-grey-darkest text-sm hover:text-white mr-2">Home</router-link>
        <router-link to="/sn" class="text-grey-light hover:text-white mr-4">Subnautica</router-link>
        <router-link to="/bz" class="text-grey-light hover:text-white mr-4">Below Zero</router-link>
        <!--<router-link to="/recipes" class="text-grey-light hover:text-white mr-2">Recipes</router-link>-->
        <!--<router-link to="/about" class="text-grey-light hover:text-white mr-2">About</router-link>-->
      </div>

      <!-- Right side -->
      <div class="">&nbsp;</div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMain',
  components: {
  },
  computed: {
    selectedDomain: () => '',
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
