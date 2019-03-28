<template>
  <nav
    id="nav"
    class="bg-black"
  >
    <div class="flex items-center justify-between max-w-xl mx-4 sm:mx-auto">

      <!-- Left side -->
      <div class="flex-1 flex items-center">
        <router-link
          to="/"
          class="flex items-center justify-center mr-4 mr-2"
        >
          <span class="logo">Craftnautica</span>
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
      <div class="flex items-center">
        <router-link
          v-if="showCart"
          :to="`/${domain}/cart`"
          class="flex items-center"
        >
          <v-icon icon="shopping-cart" color="blue-dark"></v-icon>
          <span v-if="cartCount" class="ml-2">{{ cartCount }} items</span>
        </router-link>
      </div>

    </div>
  </nav>
</template>

<script>
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'NavMain',
  components: {
    VIcon,
  },
  computed: {
    domain: vm => vm.$route.path.split(/\//)[1],
    showCart: vm => ['sn', 'bz'].indexOf(vm.domain) > -1,
    cartCount: function () {
      const cart = this.$store.state.cart[this.domain];
      if (cart) {
        return cart.length;
      }
      return 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  font-family: 'Luckiest Guy', sans-serif;
  @apply h-4;
  @apply text-white;
  @apply tracking-wide;
  &:hover {
    @apply text-blue;
  }
}
</style>
