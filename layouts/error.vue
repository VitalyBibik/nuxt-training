<template>
  <div class="layout">
    <main-error class="layout__not-found"></main-error>
  </div>
</template>

<script>
import ErrorSection from '@/components/ErrorSection';

export default {
  components: {
    'main-error': ErrorSection,
  },
};
</script>

<style scoped>
.layout {
  position: relative;
}
</style>
