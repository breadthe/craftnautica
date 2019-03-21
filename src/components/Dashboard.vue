<template>
  <section class="container mx-auto max-w-lg">
    <h1>Craftnautica</h1>

    <h2 class="mt-8">Raw Materials</h2>
    <item-section :items="rawMats"></item-section>

    <h2 class="mt-8">Recipes</h2>
    <item-section :items="recipes"></item-section>

  </section>
</template>

<script>
import items from '@/items';
import util from '@/util';
import ItemSection from '@/components/ItemSection.vue';

export default {
  name: 'Dashboard',
  components: { ItemSection },
  props: {
  },
  data: () => ({
    items,
    rawMats: util.rawMats(),
    recipes: util.recipes(),
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
