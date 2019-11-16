<template>
  <main class="container mx-0 sm:mx-auto px-4 sm:px-0 mt-4">
    <h1><v-icon icon="settings" title="Settings" class="mr-4"></v-icon>Settings</h1>

    <export-data></export-data>

    <import-data></import-data>

  </main>
</template>

<script>
import ExportData from '@/components/ExportData.vue';
import ImportData from '@/components/ImportData.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    ExportData,
    ImportData,
    VIcon,
  },
};
</script>
