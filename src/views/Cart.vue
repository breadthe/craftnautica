<template>
  <main class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
      <h1 class="flex items-center">
        <v-icon icon="shopping-cart" :size=10 color="blue-dark" class="mr-4"></v-icon>
        {{ fullDomainName }}
      </h1>
      <span v-if="cart.length">{{ cart.length }} items</span>
    </div>

    <!-- ============= Cart ============= -->
    <div class="" v-if="cart.length">
      <div
        v-for="(item, ix) in cart"
        :key="ix"
        class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
      >
        <div class="flex items-center">
          <div class="item-icon"></div>
          <router-link :to="`/${domain}/i/${id(item)}`" class="ml-4">{{ pretty(id(item)) }}</router-link>
        </div>
        <div class="flex items-center">
          {{ qty(item) }}
          <button @click="deleteItem(id(item))" class="flex ml-4">
            <v-icon icon="x-circle" color="blue-dark" class=""></v-icon>
          </button>
        </div>
      </div>

      <!-- ============= Shopping List ============= -->
      <div class="flex flex-col mt-4">
        <h3 class="border-b border-grey-darkest py-2">Shopping List</h3>

        <div
          v-for="comp in cartComponents"
          :key="comp.c"
          class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
        >
          <div class="flex items-center">
            <div class="item-icon"></div>
            <router-link :to="`/${domain}/i/${comp.c}`" class="ml-4">{{ pretty(comp.c) }}</router-link>
          </div>
          <div>{{ comp.q }}</div>
        </div>
      </div>

    </div>

    <div class="flex flex-col" v-else>
      Your cart is empty.
    </div>

  </main>
</template>

<script>
import util from '@/util';
import Algo from '@/algo';
import VIcon from '@/components/VIcon.vue';
import _groupBy from 'lodash.groupby';
import _toPairs from 'lodash.topairs';

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
    items: vm => vm.$store.state['items_' + vm.domain],

    // TODO: refactor this ugly thing
    cartComponents: function () {
      const algo = (new Algo(this.items));
      let components = this.cart.map((item) => {
        const id = Object.keys(item)[0];
        const qty = Object.values(item)[0];
        return algo.listOfMaterials(id, qty);
      }).flat();

      components = _groupBy(components, 'c');

      components = _toPairs(components);

      components = components.map(ar => ({ c: ar[0], q: ar[1].reduce((sum, { q }) => sum + q, 0) }));

      return components;
    },
  },
  methods: {
    id: item => Object.keys(item)[0],
    qty: item => item[Object.keys(item)[0]],
    deleteItem: function (id) {
      this.$store.dispatch('deleteItem', { domain: this.domain, id: id });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
