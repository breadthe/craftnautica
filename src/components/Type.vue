<template>
  <section v-if="render">
    <h2 class="my-4">{{ type }}</h2>

    <item :items="filteredItems"></item>

  </section>
</template>

<script>
import util from '@/util';
import Item from '@/components/Item.vue';

export default {
  name: 'Type',
  components: {
    Item,
  },
  props: {
    type: String,
    types: Object,
  },
  data: () => ({
    pretty: util.pretty,
  }),
  computed: {
    filteredItems: function () {
      const srcStr = this.$store.state.search;
      if (srcStr.length) {
        return util.search(this.types, srcStr);
      }

      return this.types;
    },
    render: function () {
      return Object.entries(this.filteredItems).length || false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
