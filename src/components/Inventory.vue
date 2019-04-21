<template>
  <section class="mx-4 my-8">
    <h3 class="border-b border-grey-darkest py-2">{{ inventory }}</h3>

    <div v-if="Object.keys(items).length">
      <inventory-item
          v-for="(itemQty, itemName) in items"
          :key="itemName"
          :inventory="inventory"
          :item="{[itemName]: itemQty}"
      ></inventory-item>

      <!-- ============= Empty Inventory ============= -->
      <div v-if="confirmEmptyInventory" class="flex items-center justify-end mt-4">
        <span class="mr-2">Are you sure?</span>
        <button
            @click="confirmEmptyInventory = false"
            class="flex items-center text-blue-dark p-2 hover:border-b hover:border-blue-dark mr-2"
        >
          Cancel
        </button>
        <button
            @click="emptyInventory"
            class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue"
        >
          <v-icon icon="trash-2" color="blue-dark" class="mr-2"></v-icon>
          &nbsp;Yes, Empty the Inventory
        </button>
      </div>
      <div v-else class="flex justify-end mt-4">
        <button
            @click="confirmEmptyInventory = true"
            class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue"
        >
          <v-icon icon="trash-2" color="blue-dark" class="mr-2"></v-icon>
          &nbsp;Empty Inventory
        </button>
      </div>
    </div>

    <div v-else class="mt-4">
      This custom inventory is empty and can be deleted. <a href="#" @click.prevent="confirmDeleteInventory = true">Delete inventory?</a>
    </div>

  </section>
</template>

<script>
import InventoryItem from '@/components/InventoryItem.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    InventoryItem,
    VIcon,
  },
  props: {
    inventory: {
      type: String,
      required: true,
      default: null,
    },
    items: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data: () => ({
    confirmEmptyInventory: false,
    confirmDeleteInventory: false,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sncart"
  },
  methods: {
    emptyInventory: function () {
      this.$store.dispatch('inventoryAction', { action: 'empty', domain: this.domain, inventory: this.inventory, id: null, quantity: null });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
