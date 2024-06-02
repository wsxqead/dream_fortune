<template>
  <div class="body">
    <MainSlide />
  </div>
</template>

<script>
import MainSlide from '@/components/main/MainSlide.vue';

export default {
  name: 'Main',
  components: {
    MainSlide
  }
};
</script>

<style scoped>
  .body {
    padding: 1rem;
  }
</style>
