<template>
  <div v-if="confirmEmpty" class="flex items-center justify-end mt-4">
    <span class="mr-2">Are you sure?</span>
    <button
      @click="confirmEmpty = false"
      class="flex items-center text-blue-dark p-2 hover:border-b hover:border-blue-dark mr-2"
    >
      Cancel
    </button>
    <button
      @click="emptyIt"
      class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue"
    >
      <v-icon icon="trash-2" color="blue-dark" class="mr-2"></v-icon>
      &nbsp;Yes, Empty It
    </button>
  </div>
  <div v-else class="flex justify-end mt-4">
    <button
      @click="confirmEmpty = true"
      class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue"
    >
      <v-icon icon="trash-2" color="blue-dark" class="mr-2"></v-icon>
      &nbsp;Empty {{ what }}
    </button>
  </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    VIcon,
  },
  props: {
    what: {
      type: String,
      required: true,
      default: 'Cart',
    },
    domain: {
      type: String,
      required: true,
      default: 'sn',
    },
    inventory: {
      type: String,
      required: false,
      default: null,
    },
  },
  data: () => ({
    confirmEmpty: false,
  }),
  methods: {
    emptyIt: function () {
      switch (this.what) {
        case 'Cart':
          this.$store.dispatch('emptyCart', { domain: this.domain });
          break;
        case 'Inventory':
          if (this.inventory) {
            this.$store.dispatch('inventoryAction', { action: 'empty', domain: this.domain, inventory: this.inventory, id: null, quantity: null });
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
