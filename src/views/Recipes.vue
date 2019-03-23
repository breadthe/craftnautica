<template>
  <section class="container mx-auto max-w-lg">
    <h1>{{ fullDomainName }}</h1>

    <!--<div v-for="type in types" :key="type" class="-mx-2">
      <type :type="type" :types="filterByType(type)"></type>
    </div>-->

  </section>
</template>

<script>
// import items from '@/items';
import util from '@/util';
// import Type from '@/components/Type.vue';

export default {
  name: 'Dashboard',
  // components: { Type },
  data: () => ({
    // items,
    // types: util.types(items),
  }),
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
    fullDomainName: vm => util.fullDomainName(vm.domain),
  },
  methods: {
    // filterByType: type => util.filterByType(items, type),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
