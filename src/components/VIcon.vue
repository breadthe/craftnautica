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
import VBox from '@/components/icons/VBox.vue';
import VChevronDown from '@/components/icons/VChevronDown.vue';
import VChevronLeft from '@/components/icons/VChevronLeft.vue';
import VChevronRight from '@/components/icons/VChevronRight.vue';
import VChevronUp from '@/components/icons/VChevronUp.vue';
import VDownload from '@/components/icons/VDownload.vue';
import VEdit from '@/components/icons/VEdit.vue';
import VExternalLink from '@/components/icons/VExternalLink.vue';
import VFolderPlus from '@/components/icons/VFolderPlus.vue';
import VGithub from '@/components/icons/VGithub.vue';
import VHome from '@/components/icons/VHome.vue';
import VInfo from '@/components/icons/VInfo.vue';
import VMinusCircle from '@/components/icons/VMinusCircle.vue';
import VPlus from '@/components/icons/VPlus.vue';
import VPlusCircle from '@/components/icons/VPlusCircle.vue';
import VSearch from '@/components/icons/VSearch.vue';
import VSettings from '@/components/icons/VSettings.vue';
import VShoppingCart from '@/components/icons/VShoppingCart.vue';
import VTrash2 from '@/components/icons/VTrash2.vue';
import VTwitter from '@/components/icons/VTwitter.vue';
import VUpload from '@/components/icons/VUpload.vue';
import VX from '@/components/icons/VX.vue';
import VXCircle from '@/components/icons/VXCircle.vue';

export default {
  components: {
    VBox,
    VChevronDown,
    VChevronLeft,
    VChevronRight,
    VChevronUp,
    VDownload,
    VEdit,
    VExternalLink,
    VFolderPlus,
    VGithub,
    VHome,
    VInfo,
    VMinusCircle,
    VPlus,
    VPlusCircle,
    VSearch,
    VSettings,
    VShoppingCart,
    VTrash2,
    VTwitter,
    VUpload,
    VX,
    VXCircle,
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
