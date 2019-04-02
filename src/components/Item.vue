<template>
    <router-link
      :to="{name: domain + 'details', params: { id }}"
      class="item-frame relative"
      @mouseenter.native="menu = true"
      @mouseleave.native="menu = false"
    >
      <div class="item-icon" :style="'background-image: url(' + icon(id) + ')'"></div>

      <span class="ml-2">{{ pretty(id) }}</span>

      <div
        v-if="menu"
        class="flex items-center justify-end absolute p-2 border border-blue-dark rounded rounded-t-none bg-blue-dark pin-b pin-x -mb-12 z-10"
        style="bottom: 7px; margin-left: -1px; margin-right: -1px;"
      >
        <div v-if="adding" class="pt-1 text-blue-darkest">
          Added to cart
        </div>

        <div v-else>
          <button @click.stop.prevent="addToCart" class="flex items-center text-blue-darkest">
            +&nbsp;<v-icon icon="shopping-cart" color="blue-darkest"></v-icon>
          </button>
        </div>
      </div>
    </router-link>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Item',
  components: {
    VIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null,
    },
    item: {
      type: Object,
      required: true,
      default: () => [],
    },
  },
  data: function() {
    return {
      menu: false,
      icon: util.icon,
      pretty: util.pretty,
      adding: false,
    };
  },
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
  },
  methods: {
    addToCart: function() {
      this.adding = true;
      this.$store.dispatch('addToCart', { domain: this.domain, id: this.id, qty: 1 });
      setTimeout(() => { this.adding = false; }, 750);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
