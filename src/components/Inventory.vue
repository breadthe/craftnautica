<template>
  <section class="mx-4 my-8">
    <h3
        v-if="!renamingInventory"
        @click="!isDefaultInventory ? renamingInventory = true : null"
        class="flex items-center border-b border-grey-darkest py-2"
    >
      {{ inventory }}

      <button v-if="!isDefaultInventory" @click="renamingInventory = true" class="flex ml-2">
        <v-icon icon="edit" color="blue-dark"></v-icon>
      </button>
    </h3>
    <div v-if="renamingInventory" class="flex items-center border-b border-grey-darkest py-2">
      <input
          v-focus
          v-select
          ref="inventoryName"
          name="inventoryName"
          type="text"
          v-model="newInventoryName"
          @keyup.enter="renameInventory"
          class="p-2"
      >

      <v-button link @click="renamingInventory = false">Cancel</v-button>

      <v-button @click="renameInventory">Save</v-button>
    </div>

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

        <v-button link @click="confirmDeleteInventory = false">Cancel</v-button>

        <v-button icon="trash-2" @click="deleteInventory">Yes, Delete {{ inventory }}</v-button>

      </p>
      <p v-else>
        This custom inventory is empty and can be deleted. <a href="#" @click.prevent="confirmDeleteInventory = true">Delete inventory?</a>
      </p>
    </div>

  </section>
</template>

<script>
import util from '@/util';
import EmptyCartOrInventory from '@/components/EmptyCartOrInventory.vue';
import InventoryItem from '@/components/InventoryItem.vue';
import VButton from '@/components/VButton.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Inventory',
  components: {
    EmptyCartOrInventory,
    InventoryItem,
    VButton,
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
  data: vm => ({
    confirmEmptyInventory: false,
    confirmDeleteInventory: false,
    renamingInventory: false,
    newInventoryName: vm.inventory,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sncart"
    isDefaultInventory: function () {
      return util.isDefaultInventory(this.inventory);
    },
  },
  methods: {
    deleteInventory: function () {
      this.$store.dispatch('deleteInventory', { domain: this.domain, inventory: this.inventory });
    },
    renameInventory: function () {
      this.$store.dispatch('renameInventory', { domain: this.domain, oldInventoryName: this.inventory, newInventoryName: this.newInventoryName });
      this.renamingInventory = false;
      this.newInventoryName = this.inventory;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
