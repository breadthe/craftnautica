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
        An overview of all your inventories (vehicles, bases, lockers, and other storage locations) where you store items and materials. You can easily see how much quantity of a certain material you have in each location.
      </div>

      <inventory
          v-for="(items, inventoryName) in inventories"
          :key="inventoryName"
          :inventory="inventoryName"
          :items="items"
      ></inventory>
    </div>

    <div class="flex flex-col" v-else>
      You don't have items in inventories yet.
    </div>

  </main>
</template>

<script>
import util from '@/util';
import Inventory from '@/components/Inventory.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Inventories',
  components: {
    Inventory,
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
