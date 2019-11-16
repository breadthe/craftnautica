<template>
  <main class="container mx-4 sm:mx-auto mt-4">
    <h1>Settings</h1>

    <export-data></export-data>

    <import-data></import-data>

  </main>
</template>

<script>
import ExportData from '@/components/ExportData.vue';
import ImportData from '@/components/ImportData.vue';

export default {
  components: {
    ExportData,
    ImportData,
  },
};
</script>
