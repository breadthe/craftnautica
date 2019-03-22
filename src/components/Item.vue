<template>
  <div class="flex flex-wrap justify-start -mx-2">
      <router-link
        v-for="(data, id) in items"
        :key="id"
        :to="{name: 'details', params: { id }}"
        class="flex items-center m-2 p-2 border border-grey-darkest text-lg font-light hover:bg-blue-darker hover:border-blue-dark"
      >
        <div class="w-12 h-12 mr-2 rounded-full bg-grey-darkest border border-grey-darker"></div>
        {{ pretty(id) }}
      </router-link>
  </div>
</template>

<script>
import util from '@/util';

export default {
  name: 'Item',
  props: {
    items: {
      type: Object,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    pretty: util.pretty,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
