<template>
  <div class="flex flex-wrap justify-start -mx-2">
      <router-link
        v-for="(data, id) in items"
        :key="id"
        :to="{name: domain + 'details', params: { id }}"
        class="item-frame"
      >
        <div class="item-icon"></div>
        <span class="ml-2">{{ pretty(id) }}</span>
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
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
