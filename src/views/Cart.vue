<template>
  <section class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
      <h1 class="flex items-center">
        <v-icon icon="shopping-cart" :size=10 color="blue-dark" class="mr-4"></v-icon>
        {{ fullDomainName }}
      </h1>
      <span v-if="cart.length">{{ cart.length }} items</span>
    </div>

    <div class="" v-if="cart.length">
      <div v-for="(item, ix) in cart" :key="ix" class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker">
        <div class="flex items-center">
          <div class="item-icon"></div>
          <router-link :to="`/${domain}/i/${id(item)}`" class="ml-4">{{ pretty(id(item)) }}</router-link>
        </div>
        <div>{{ qty(item) }}</div>
      </div>
    </div>

    <div class="flex flex-col" v-else>
      Your cart is empty.
    </div>

  </section>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Cart',
  components: {
    VIcon,
  },
  data: () => ({
    pretty: util.pretty,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/cart/, ''), // strip out "cart" from "sncart"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    cart: vm => vm.$store.state.cart[vm.domain] || [],
  },
  methods: {
    id: item => Object.keys(item)[0],
    qty: item => item[Object.keys(item)[0]],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
