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
      <empty-cart-or-inventory
          what="Inventory"
          :domain="domain"
          :inventory="inventory"
      ></empty-cart-or-inventory>
    </div>

    <div v-else class="mt-4">
      <p v-if="confirmDeleteInventory" class="flex items-center">
        Are you sure?

        <button
            @click="confirmDeleteInventory = false"
            class="flex items-center text-blue-dark p-2 hover:border-b hover:border-blue-dark mx-4"
        >
          Cancel
        </button>

        <button
            @click="deleteInventory"
            class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue mx-4"
        >
          <v-icon icon="trash-2" color="blue-dark" class="mr-2"></v-icon>
          Yes, Delete {{ inventory }}
        </button>

      </p>
      <p v-else>
        This custom inventory is empty and can be deleted. <a href="#" @click.prevent="confirmDeleteInventory = true">Delete inventory?</a>
      </p>
    </div>

  </section>
</template>

<script>
import EmptyCartOrInventory from '@/components/EmptyCartOrInventory.vue';
import InventoryItem from '@/components/InventoryItem.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Inventory',
  components: {
    EmptyCartOrInventory,
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
    deleteInventory: function () {
      this.$store.dispatch('deleteInventory', { domain: this.domain, inventory: this.inventory });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
