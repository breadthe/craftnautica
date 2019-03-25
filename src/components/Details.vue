<template>
  <main class="container mx-auto max-w-lg">
    <div class="flex justify-start my-4">
      <router-link :to="`/${domain}`">{{ fullDomainName }}</router-link>
      &nbsp;&raquo;&nbsp;
      {{ type }}
    </div>

    <div class="flex justify-between items-center my-8 text-lg font-light">
      <div class="flex items-center">
        <div class="item-icon"></div>
        <h2 class="ml-4 text-blue">{{ pretty(id) }}</h2>
      </div>

      <div v-if="adding">
        Added to cart
      </div>
      <div v-else>
        <button
            @click.stop.prevent="addToCart"
            class="flex items-center text-grey border border-blue-dark rounded p-2 text-2xl hover:bg-blue hover:text-white"
        >
          +&nbsp;
          <v-icon icon="shopping-cart" color="blue-dark"></v-icon>
        </button>
      </div>

    </div>


    <div class="" v-if="rawMat">
      This item is a raw material or base component.
    </div>

    <div class="flex flex-col" v-else>
      <h3 class="border-b border-grey-darkest py-2">Components</h3>

      <div v-for="comp in components" :key="comp.c" class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker">
        <div class="flex items-center">
          <div class="item-icon"></div>
          <router-link :to="`${comp.c}`" class="ml-4">{{ pretty(comp.c) }}</router-link>
        </div>
        <div>{{ comp.q }}</div>
      </div>
    </div>

  </main>
</template>

<script>
import store from '@/store';
import Algo from '@/algo';
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Details',
  components: {
    VIcon,
  },
  props: {
    id: String,
  },
  data: () => ({
    pretty: util.pretty,
    components: null,
    adding: false,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/details/, ''), // strip out "details" from "sndetails"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    items: vm => vm.$store.state['items_' + vm.domain],
    type: vm => vm.items[vm.id].t,
    rawMat: vm => vm.type.split('.')[0] === 'Raw_Materials',
  },
  methods: {
    setData: function (components) {
      this.components = components;
    },
    addToCart: function () {
      this.adding = true;
      this.$store.dispatch('addToCart', { domain: this.domain, id: this.id, qty: 1 });
      setTimeout(() => { this.adding = false; }, 750);
    },
  },
  beforeRouteEnter(to, from, next) {
    let items = null;
    switch (to.name) {
      case 'sndetails': items = store.state.items_sn; break;
      case 'bzdetails': items = store.state.items_bz; break;
      default:
        next(vm => vm.$router.push({ path: '/404' }));
        break;
    }

    const components = (new Algo(items)).listOfMaterials(to.params.id);
    if (components.length) {
      next(vm => vm.setData(components));
    } else {
      next(vm => vm.$router.push({ path: '/404' }));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
