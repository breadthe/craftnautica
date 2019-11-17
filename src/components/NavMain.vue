<template>
  <nav
    id="nav"
    class="bg-black"
  >
    <div class="flex items-center justify-between max-w-2xl mx-4 sm:mx-8 lg:mx-auto">

      <!-- Left side -->
      <div class="flex-1 flex items-center -ml-3 sm:-ml-0">
        <router-link
          to="/"
          class="flex items-center justify-center mr-4"
          aria-label="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper"
        >
          <span class="logo hidden sm:block uppercase">
            <span class="sub">Craft</span><span class="nautica">nautica</span>
          </span>
          <span class="flex sm:hidden">
            <img src="favicons/favicon-32x32.png" alt="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper" title="Craftnautica - Subnautica & Subnautica: Below Zero crafting helper">
          </span>
        </router-link>

        <router-link
          to="/sn"
          class="border-b-4 border-black pb-2 mt-3 mr-4 text-grey-light hover:text-white text-sm sm:text-base"
          :class="domain === 'sn' ? 'font-bold text-blue-lightest border-blue-dark' : 'hover:border-grey-light'"
        >Subnautica</router-link>

        <router-link
          to="/bz"
          class="border-b-4 border-black pb-2 mt-3 mr-4 text-grey-light hover:text-white text-sm sm:text-base"
          :class="domain === 'bz' ? 'font-bold text-blue-lightest border-blue-dark' : 'hover:border-grey-light'"
        >Below Zero</router-link>

      </div>

      <!-- Right side -->
      <div class="flex items-center -mr-2 sm:-mr-0">
        <!-- Inventories -->
        <router-link
            v-if="showCart"
            :to="`/${domain}/inventories`"
            class="flex items-center ml-4 sm:ml-8"
        >
          <v-icon icon="box" :color="inventoriesCount ? 'blue-dark' : 'blue-darkest'" title="Inventories"></v-icon>
          <span
              v-if="inventoriesCount"
              class="ml-2 w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-blue bg-blue text-black text-sm"
              :title="`${inventoriesCount} inventories`"
          >
            {{ inventoriesCount }}
          </span>
        </router-link>

        <!-- Cart -->
        <router-link
          v-if="showCart"
          :to="`/${domain}/cart`"
          class="flex items-center ml-4 sm:ml-8"
        >
          <v-icon icon="shopping-cart" :color="cartCount ? 'blue-dark' : 'blue-darkest'" title="Shopping cart"></v-icon>
          <span
            v-if="cartCount"
            class="ml-2 w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-blue bg-blue text-black text-sm"
            :title="`${cartCount} items in cart`"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <!-- Settings -->
        <router-link
          to='/settings'
          class="flex items-center ml-4 sm:ml-8"
        >
          <v-icon icon="settings" color="blue-dark" title="Settings"></v-icon>
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
      const cart = this.$store.state.Cart.cart[this.domain];
      return cart ? cart.length : 0;
    },
    inventoriesCount: function () {
      return this.$store.getters.inventoriesCount(this.domain);
    },
  },
};
</script>
