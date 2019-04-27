<template>
  <div
      :class="small ? 'item-icon--sm mr-2' : 'item-icon'"
      :style="'background-image: url(' + icon(id) + ')'"
  ></div>
</template>

<script>
import util from '@/util';

export default {
  name: 'ItemIcon',
  props: {
    id: {
      type: String,
      required: true,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      icon: util.icon,
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-icon {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply w-12;
  @apply h-12;
  @apply p-6;
  @apply rounded-full;
  @apply bg-grey-darkest;
  background-position: center;
  background-repeat: no-repeat;

  &--sm {
    @extend .item-icon;
    @apply w-8;
    @apply h-8;
    @apply p-4;
    background-size: 100%;
  }
}
</style>
