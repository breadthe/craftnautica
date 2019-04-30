<template>
  <button
      @click="$emit('click')"
      class="flex items-center text-blue-dark p-2"
      :class="link ? 'mx-2' : 'border border-blue rounded hover:bg-blue'"
  >
    <v-icon v-if="icon" :icon="icon" color="blue-dark" class="mr-2"></v-icon>
    <slot></slot>
  </button>
</template>

<script>
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    VIcon,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: null,
    },

    // Indicates if the button is link-style (no border), used mostly for Cancel
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
