<template>
  <section class="container mx-auto max-w-lg">
    <h1>Craftnautica</h1>

    <div v-for="type in types" :key="type" class="-mx-2">
      <types :type="type" :types="filterByType(type)"></types>
    </div>

  </section>
</template>

<script>
import items from '@/items';
import util from '@/util';
import Types from '@/components/Types.vue';

export default {
  name: 'Dashboard',
  components: { Types },
  data: () => ({
    items,
    types: util.types(items),
  }),
  methods: {
    filterByType: type => util.filterByType(items, type),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
