<template>
  <section v-if="render" class="mx-4 xs:mx-0">
    <h3 class="mt-8 mb-4">{{ type }}</h3>

    <div class="flex flex-wrap justify-start -mx-2">
      <item
        v-for="(item, id) in filteredItems"
        :key="id"
        :id="id"
        :item="item"
      ></item>
    </div>

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
