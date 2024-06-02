<template>
  <div class="body">
    <MainSlide />
    <RecommendedFortunes />
    <FortuneCards />
    <KeyServices />
    <CharacterIntroduction />
    <TestimonialsSlide />
    <RecommendedRegister />
    <FAQ />
  </div>
</template>

<script>
import MainSlide from '@/components/main/MainSlide.vue';
import RecommendedFortunes from '@/components/main/RecommendedFortunes.vue'
import FortuneCards from '@/components/main/FortuneCards.vue'
import KeyServices from '@/components/main/KeyServices.vue'
import CharacterIntroduction from '@/components/main/CharacterIntroduction.vue'
import TestimonialsSlide from '@/components/main/TestimonialsSlide.vue'
import RecommendedRegister from '@/components/main/RecommendedRegister.vue'
import FAQ from '@/components/main/FAQ.vue'

export default {
  name: 'Main',
  components: {
    MainSlide,
    RecommendedFortunes,
    FortuneCards,
    KeyServices,
    CharacterIntroduction,
    TestimonialsSlide,
    RecommendedRegister,
    FAQ
  }
};
</script>

<style scoped>
  .body {
    padding: 1rem;
  }
</style>
