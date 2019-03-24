<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(0,0,0,0)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather stroke-current"
      :class="[icon, `text-${color}`, `w-${size}`, `h-${size}`]"
  >
    <keep-alive>
      <component
          :is="dynamicIcon"
          :size=size
      ></component>
    </keep-alive>
  </svg>
</template>

<script>
import VExternalLink from '@/components/icons/VExternalLink.vue';
import VHome from '@/components/icons/VHome.vue';
import VSearch from '@/components/icons/VSearch.vue';
import VShoppingCart from '@/components/icons/VShoppingCart.vue';
import VX from '@/components/icons/VX.vue';

export default {
  components: {
    VExternalLink,
    VHome,
    VSearch,
    VShoppingCart,
    VX,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: 'x',
    },
    size: {
      type: Number,
      required: false,
      default: 6, // Tailwind sizes
    },
    color: {
      type: String,
      required: false,
      default: 'grey-light',
    },
  },
  computed: {
    dynamicIcon: function () {
      return `v-${this.icon}`; // default icon: x
    },
  },
};
</script>

<style>
  svg {
    @apply cursor-pointer;
    @apply inline-block;
  }
</style>
