<template>
  <div class="flex flex-col mt-4">
    <h3 class="border-b border-grey-darkest py-2">{{ title }}</h3>

    <div
      v-for="component in list"
      :key="component.c"
      class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
    >
      <router-link :to="`/${domain}/i/${component.c}`" class="flex items-center">
        <item-icon :id="component.c" class="mr-4"></item-icon>

        {{ pretty(component.c) }}
      </router-link>

      <div>{{ component.q }}</div>
    </div>
  </div>
</template>

<script>
import util from '@/util';
import ItemIcon from '@/components/ItemIcon.vue';

export default {
  name: 'ComponentsList',
  components: {
    ItemIcon,
  },
  props: {
    domain: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    pretty: util.pretty,
    icon: util.icon,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
