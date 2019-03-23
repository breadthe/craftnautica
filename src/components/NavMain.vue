<template>
  <nav
    id="nav"
    class="bg-black"
  >
    <div class="flex items-center justify-between max-w-lg mx-auto">

      <!-- Left side -->
      <div class="flex-1 flex items-center">
        <router-link
          to="/"
          class="flex items-center justify-center mr-4 mr-2"
        >
          <v-icon icon="home" color="blue-dark"></v-icon>
        </router-link>

        <router-link
          to="/sn"
          class="border-b-4 border-black pb-2 mt-3 mr-4 text-grey-light hover:text-white"
          :class="domain === 'sn' ? 'font-bold text-blue-lightest border-blue-dark' : 'hover:border-grey-light'"
        >Subnautica</router-link>

        <router-link
          to="/bz"
          class="border-b-4 border-black pb-2 mt-3 mr-4 text-grey-light hover:text-white"
          :class="domain === 'bz' ? 'font-bold text-blue-lightest border-blue-dark' : 'hover:border-grey-light'"
        >Below Zero</router-link>

      </div>

      <!-- Right side -->
      <div class="">&nbsp;</div>

    </div>
  </nav>
</template>

<script>
import VIcon from '@/components/reusable/VIcon.vue';

export default {
  name: 'NavMain',
  components: {
    VIcon,
  },
  computed: {
    domain: vm => vm.$route.path.split(/\//)[1],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
