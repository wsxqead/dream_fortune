<template>
  <div class="body">
    <MainSlide />
    <RecommendedFortunes />
    <FortuneCards />
  </div>
</template>

<script>
import MainSlide from '@/components/main/MainSlide.vue';
import RecommendedFortunes from '@/components/main/RecommendedFortunes.vue'
import FortuneCards from '@/components/main/FortuneCards.vue'

export default {
  name: 'Main',
  components: {
    MainSlide,
    RecommendedFortunes,
    FortuneCards
  }
};
</script>

<style scoped>
  .body {
    padding: 1rem;
  }
</style>
