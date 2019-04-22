<template>
  <footer>
    <div class="flex items-start justify-between w-full max-w-lg">
      <div class="flex items-center">
        <div class="beta">beta</div>
        {{ version }}
      </div>
      <div class="flex items-center">
        <a href="https://github.com/breadthe/craftnautica" target="_blank">
          <v-icon icon="github" color="blue-dark" class="mr-4"></v-icon>
        </a>
      </div>
      <div class="flex flex-col">
        <router-link to="/contact" class="mb-4 sm:mb-2">Contact</router-link>
        <router-link to="/privacy" class="mb-4 sm:mb-2">Privacy Policy</router-link>
      </div>
    </div>

    <div class="mt-4 text-xs">All images and icons are copyright to their respective owners.</div>
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
  @apply p-4;
  @apply bg-black;
  @apply flex;
  @apply flex-col;
  @apply items-center;

  @screen sm {
    @apply p-8;
  }
}
.beta {
  @apply border;
  @apply border-blue-dark;
  @apply bg-blue-dark;
  @apply rounded;
  @apply text-black;
  @apply text-xs;
  @apply p-1;
  @apply mr-2;
}
</style>
