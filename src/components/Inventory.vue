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
    </div>

    <div v-else class="mt-4">
      This custom inventory is empty and can be deleted. <a href="#" @click.prevent="confirmDeleteInventory = true">Delete inventory?</a>
    </div>

  </section>
</template>

<script>
import InventoryItem from '@/components/InventoryItem.vue';

export default {
  components: {
    InventoryItem,
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
    confirmDeleteInventory: false,
  }),
  computed: {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
