<template>
  <main class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
      <h1 class="flex items-center">
        <v-icon icon="box" :size=10 color="blue-dark" class="mr-4"></v-icon>
        {{ fullDomainName }}
      </h1>
      <span v-if="inventoriesCount">{{ inventoriesCount }} inventories</span>
    </div>

    <!-- ============= Inventories ============= -->
    <div
        v-if="Object.keys(inventories).length"
    >

      <div class="max-w-lg mx-auto text-xl">
        This is an overview of all your inventories (vehicles, bases, lockers, and other storage locations) where you store items and materials. You can easily see how much quantity of a certain material you have in, say, your Cyclops.
      </div>

      <div
          v-for="(items, inventoryName) in inventories"
          :key="inventoryName"
          class="mx-4 my-8"
      >
        <h2 class="text-center">{{ inventoryName }}</h2>

        <div v-for="(itemQty, itemName) in items" :key="itemName">
          <inventory-item
              :inventory="inventoryName"
              :item="{[itemName]: itemQty}"
          ></inventory-item>
        </div>
      </div>
    </div>

    <div class="flex flex-col" v-else>
      You don't have items in inventories yet.
    </div>

  </main>
</template>

<script>
import util from '@/util';
import InventoryItem from '@/components/InventoryItem.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    InventoryItem,
    VIcon,
  },
  data: () => ({
    pretty: util.pretty,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sninventories"
    inventories: function () {
      return this.$store.getters.domainInventories(this.domain);
    },
    inventoriesCount: vm => Object.keys(vm.inventories).length,
    fullDomainName: vm => util.fullDomainName(vm.domain),
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
