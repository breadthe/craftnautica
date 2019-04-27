<template>
  <div
      :ref="`item_${id}`"
      @click="menu = true"
      v-click-outside="closeItemMenu"
      class="item-frame relative"
  >
      <div class="item-icon" :style="'background-image: url(' + icon(id) + ')'"></div>

      <span class="ml-2">{{ pretty(id) }}</span>

      <item-menu
          v-if="menu"
          :id="id"
          :domain="domain"
          @closeItemMenu="menu = false"
      ></item-menu>
  </div>
</template>

<script>
import util from '@/util';
import ItemMenu from '@/components/ItemMenu.vue';

export default {
  name: 'Item',
  components: {
    ItemMenu,
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
  data: function () {
    return {
      menu: false,
      icon: util.icon,
      pretty: util.pretty,
    };
  },
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
  },
  methods: {
    closeItemMenu: function () {
      this.menu = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
