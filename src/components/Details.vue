<template>
  <main class="mx-4 sm:mx-auto max-w-lg">
    <div class="flex justify-start my-4">
      <router-link :to="`/${domain}`">{{ fullDomainName }}</router-link>
      &nbsp;&gt;
      {{ formatType(type) }}
    </div>

    <div class="flex justify-between items-center my-8 text-lg font-light">
      <div class="flex items-center">
        <div class="item-icon" :style="'background-image: url(' + icon(id) + ')'"></div>

        <div class="flex flex-col ml-4">
          <h2 class="">{{ pretty(id) }}</h2>

          <a :href="wikiLink(id)" target="_blank" class="flex items-center">
            wiki&nbsp;
            <v-icon icon="external-link" :size=4 color="blue-dark"></v-icon>
          </a>
        </div>

      </div>

      <div class="flex">
        <!-- ============= Add to Inventory ============= -->
        <div
            v-click-outside="closeItemMenu"
            class="relative ml-4"
        >
          <button
              @click.stop.prevent="menu = true"
              class="flex items-center text-grey border border-blue-dark rounded p-2 text-2xl hover:bg-blue hover:text-white"
              title="Add to Inventory"
          >
            +&nbsp;
            <v-icon icon="box" color="blue-dark"></v-icon>
          </button>

          <item-menu
              v-if="menu"
              :id="id"
              :domain="domain"
              @closeItemMenu="menu = false"
          ></item-menu>

        </div>

        <!-- ============= Add to Cart ============= -->
        <div v-if="addingToCart">
          Added to cart
        </div>
        <div v-else class="ml-4">
          <button
              @click.stop.prevent="addToCart"
              class="flex items-center text-grey border border-blue-dark rounded p-2 text-2xl hover:bg-blue hover:text-white"
              title="Add to Cart"
          >
            +&nbsp;
            <v-icon icon="shopping-cart" color="blue-dark"></v-icon>
          </button>
        </div>
      </div>

    </div>

    <!-- ============= Recipe / Base Components ============= -->
    <div class="text-center" v-if="rawMat">
      This item is a raw material or base component.
    </div>

    <div class="" v-else>
      <!-- ============= Recipe ============= -->
      <div class="flex flex-col mt-8">
        <h3 class="border-b border-grey-darkest py-2">Recipe</h3>

        <div
            v-for="item in recipe(id)"
            :key="item.c"
            class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
        >
          <div class="flex items-center">
            <div class="item-icon" :style="'background-image: url(' + icon(item.c) + ')'"></div>
            <router-link :to="`${item.c}`" class="ml-4">{{ pretty(item.c) }}</router-link>
          </div>
          <div>{{ item.q }}</div>
        </div>
      </div>

      <!-- ============= Base Components ============= -->
      <div class="flex flex-col mt-8">
        <h3 class="border-b border-grey-darkest py-2">Base Components</h3>

        <div
            v-for="comp in components"
            :key="comp.c"
            class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
        >
          <div class="flex items-center">
            <div class="item-icon" :style="'background-image: url(' + icon(comp.c) + ')'"></div>
            <router-link :to="`${comp.c}`" class="ml-4">{{ pretty(comp.c) }}</router-link>
          </div>
          <div>{{ comp.q }}</div>
        </div>
      </div>

    </div>

    <!-- ============= Inventories containing this item ============= -->
    <div v-if="qtyInInventories.length" class="mt-8">
      <div class="flex items-center justify-between border-b border-grey-darkest py-2">
        <h3 class="flex items-center">
          <router-link
              :to="`/${domain}/inventories`"
              class="flex items-center"
          >
            <v-icon icon="box" color="blue-dark" class="mr-2"></v-icon>
            Inventories
          </router-link>
          <small class="font-light ml-2">({{ qtyInInventories.length }})</small>
        </h3>
        <span class="font-bold text-lg">{{ totalQtyInInventories }}</span>
      </div>

      <div
          v-for="(inventory, i) in qtyInInventories"
          :key="i"
          class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
      >
        <div class="flex items-center font-bold">
            {{ pretty(inventory.i) }}
        </div>
        <div>{{ inventory.q }}</div>
      </div>
    </div>

  </main>
</template>

<script>
import store from '@/store';
import Algo from '@/algo';
import util from '@/util';
import ItemMenu from '@/components/ItemMenu.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Details',
  components: {
    ItemMenu,
    VIcon,
  },
  props: {
    id: String,
  },
  data: () => ({
    pretty: util.pretty,
    icon: util.icon,
    components: null,
    menu: false,
    addingToCart: false,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/details/, ''), // strip out "details" from "sndetails"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    items: vm => vm.$store.state.App['items_' + vm.domain],
    type: vm => vm.items[vm.id].t,
    rawMat: vm => vm.type.split('.')[0] === 'Raw_Materials',
    qtyInInventories: function () {
      return this.$store.getters.qtyInInventories(this.domain, this.id);
    },
    totalQtyInInventories: function () {
      return this.qtyInInventories.reduce((total, i) => total + i.q, 0);
    },
  },
  methods: {
    setData: function (components) {
      this.components = components;
    },
    addToCart: function () {
      this.addingToCart = true;
      this.$store.dispatch('addToCart', { domain: this.domain, id: this.id, qty: 1 });
      setTimeout(() => { this.addingToCart = false; }, 750);
    },
    formatType: type => util.formatType(type),
    recipe: function (item) {
      return util.recipe(item, this.items);
    },
    wikiLink: function (item) {
      return this.domain === 'sn'
        ? `https://subnautica.fandom.com/wiki/${item}`
        : `https://subnautica-belowzero.fandom.com/wiki/${item}`;
    },
    closeItemMenu: function () {
      this.menu = false;
    },
  },
  beforeRouteEnter(to, from, next) {
    let items = null;
    switch (to.name) {
      case 'sndetails': items = store.state.App.items_sn; break;
      case 'bzdetails': items = store.state.App.items_bz; break;
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
