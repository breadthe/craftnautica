<template>
  <main class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
      <h1 class="flex items-center">
        <v-icon icon="box" :size=10 color="blue-dark" class="mr-4"></v-icon>
        {{ fullDomainName }}
      </h1>
      <span v-if="inventoriesCount">{{ inventoriesCount }} inventories</span>
    </div>

    <div class="max-w-lg mx-auto text-xl">This is an overview of all your inventories (vehicles, bases, lockers, and other storage locations) where you store items and materials. You can easily see how much quantity of a certain material you have in, say, your Cyclops.</div>

    <!-- ============= Inventories ============= -->
    <div
        v-if="Object.keys(inventories).length"
        v-for="(items, inventoryName) in inventories"
        :key="inventoryName"
        class="mx-4 my-8"
    >
      <h2 class="text-center">{{ inventoryName }}</h2>

      <div v-for="(itemQty, itemName) in items" :key="itemName">
        <inventory-item
            :item="{[itemName]: itemQty}"
        ></inventory-item>
      </div>
    </div>

    <div class="flex flex-col" v-else>
      You don't have items in inventories yet.
    </div>

  </main>
</template>

<script>
// import 'array-flat-polyfill';
import util from '@/util';
// import Algo from '@/algo';
import InventoryItem from '@/components/InventoryItem.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    InventoryItem,
    VIcon,
  },
  data: () => ({
    pretty: util.pretty,
    // icon: util.icon,
    // recipe: util.recipe,
    // confirmEmptyCart: false,
    // showAllRecipes: false,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sninventories"
    inventories: function () {
      return this.$store.getters.domainInventories(this.domain);
    },
    inventoriesCount: vm => Object.keys(vm.inventories).length,
    fullDomainName: vm => util.fullDomainName(vm.domain),
    // cart: vm => vm.$store.state.Cart.cart[vm.domain] || [],
    // items: vm => vm.$store.state.App['items_' + vm.domain],
    // shoppingList: vm => (new Algo(vm.items)).shoppingList(vm.cart),
  },
  methods: {
    // id: item => util.id(item),
    /*components: function (id) {
      return (new Algo(this.items)).listOfMaterials(id);
    },*/
    /*emptyCart: function () {
      this.$store.dispatch('emptyCart', { domain: this.domain });
    },*/
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
