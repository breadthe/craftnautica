<template>
  <footer>
    <div class="flex items-center">
      <div class="beta">beta</div>
      {{ version }}
    </div>
    <div class="flex items-center">
      <a href="https://github.com/breadthe/craftnautica" target="_blank">
        <v-icon icon="github" color="blue-dark" class="mr-4"></v-icon>
      </a>
    </div>
    <div class="flex items-center">
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
  </footer>
</template>

<script>
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'AppFooter',
  components: {
    VIcon,
  },
  props: {
    version: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  @apply static;
  @apply pin-b;
  @apply mt-8;
  @apply p-8;
  @apply bg-black;
  @apply flex;
  @apply items-center;

  div {
    @apply mr-8;
  }
}
.beta {
  @apply border;
  @apply border-blue-dark;
  @apply bg-blue-dark;
  @apply rounded;
  @apply text-black;
  @apply p-1;
  @apply mr-2;
}
</style>
