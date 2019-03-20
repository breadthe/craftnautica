<template>
  <div class="container mx-auto p-4">
    <h1>Items</h1>

    <section
      v-for="(components, item) in items"
      :key="item"
      class="flex justify-start py-2 border-b border-blue-darker"
    >
      <div class="w-1/4 font-light text-2xl">
        {{ item }}
      </div>
      <div class="w-3/4" v-if="components">
        <div v-for="comp in components" :key="comp.comp">
          {{ comp.comp }}: {{ comp.qty }}
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import items from '@/items';

export default {
  name: 'recipes2',
  components: {
  },
  data: () => ({
    items,
  }),
  methods: {
    showMats: (mats) => {
      console.log(mats);
      // console.log(Object.keys(mats));
      // console.log(Object.values(mats));
      // return Object.keys(mats) + Object.values(mats);
    },
  },
  computed: {
    mats: () => this.items.filter(i => null),
  },
};
</script>
