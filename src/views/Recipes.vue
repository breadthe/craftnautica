<template>
  <section class="container mx-auto max-w-lg mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
      <h1>{{ fullDomainName }}</h1>

      <search></search>
    </div>

    <!--<div v-for="type in types" :key="type" class="-mx-2">
      <type :type="type" :types="filterByType(type)"></type>
    </div>-->

  </section>
</template>

<script>
// import items from '@/items';
import util from '@/util';
// import Type from '@/components/Type.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Dashboard',
  components: {
    // Type,
    Search,
  },
  data: () => ({
    // items,
    // types: util.types(items),
  }),
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
    fullDomainName: vm => util.fullDomainName(vm.domain),
    items: vm => () => import('@/items-' + vm.domain),
  },
  methods: {
    // filterByType: type => util.filterByType(items, type),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
