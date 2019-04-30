<template>
  <div v-if="confirmEmpty" class="flex items-center justify-end mt-4">
    Are you sure?

    <v-button link @click="confirmEmpty = false">Cancel</v-button>

    <v-button icon="trash-2" @click="emptyIt">Yes, Empty It</v-button>
  </div>

  <div v-else class="flex justify-end mt-4">
    <v-button icon="trash-2" @click="confirmEmpty = true">Empty {{ what }}</v-button>
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';

export default {
  components: {
    VButton,
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
