<template>
  <div class="body">
    <MainSlide />
    <RecommendedFortunes />
  </div>
</template>

<script>
import MainSlide from '@/components/main/MainSlide.vue';
import RecommendedFortunes from '@/components/main/RecommendedFortunes.vue'

export default {
  name: 'Main',
  components: {
    MainSlide,
    RecommendedFortunes
  }
};
</script>

<style scoped>
  .body {
    padding: 1rem;
  }
</style>
