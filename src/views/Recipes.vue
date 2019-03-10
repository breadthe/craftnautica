<template>
  <div class="container mx-auto p-4">
    <h1>Mats</h1>

    <section v-for="(recipe, i) in recipes" :key="i" class="mt-4">
      <div v-for="(mats, name) in recipe" :key="name" class="flex items start py-2 border-b border-blue-darker">
        <div class="w-1/4 font-light text-2xl">
          {{ name }}
        </div>
        <div class="w-3/4">
          <!-- {{ showMats(mats) }} -->
          <!-- <div v-for="(qty, label) in mats" :key="label">{{ label }}: {{ qty }}</div> -->
          <div v-for="mat in mats" :key="mat.comp">{{ mat.comp }}: {{ mat.qty }}</div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import fabricator from '@/fabricator';

export default {
  name: 'recipes',
  components: {
  },
  data: () => ({
    recipes: fabricator.recipes,
  }),
  methods: {
    showMats: (mats) => {
      console.log(mats);
      // console.log(Object.keys(mats));
      // console.log(Object.values(mats));
      // return Object.keys(mats) + Object.values(mats);
    },
  },
};
</script>
