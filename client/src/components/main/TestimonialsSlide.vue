<template>
  <div class="testimonials">
    <h2>사용자 리뷰</h2>
    <swiper :autoplay="{ delay: 5000 }" :modules="EffectCards" pagination :loop="true">
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-item">
        <p class="testimonial-content">"{{ testimonial.content }}"</p>
        <p class="testimonial-author">- {{ testimonial.author }}, {{ testimonial.location }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'TestimonialsSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials: [
        { content: '이 사이트에서 매일 확인하는 오늘의 운세가 정말 정확해요! 하루의 시작이 더 좋아졌습니다.', author: '김지영', location: '서울' },
        { content: '별자리 운세 덕분에 중요한 결정을 내릴 때 큰 도움이 됐어요. 감사합니다!', author: '이민호', location: '부산' },
        { content: '띠별 운세를 보고 가족과 함께 재미있게 이야기를 나눌 수 있었어요. 모두가 즐거워했습니다.', author: '박서연', location: '대구' },
        { content: '궁합 결과가 너무 재미있고 유익했어요. 친구들에게도 추천했습니다.', author: '최현우', location: '인천' },
        { content: '운세가 정말 정확해서 놀랐습니다. 매일 확인하게 돼요.', author: '정수민', location: '광주' },
        { content: '건강 운세 덕분에 생활 습관을 바꾸게 되었고, 건강이 좋아졌어요.', author: '김하늘', location: '대전' },
        { content: '사랑의 운세를 보고 더 긍정적인 마음가짐을 가지게 되었어요. 좋은 결과를 기대합니다.', author: '오은지', location: '울산' },
        { content: '재물 운세가 현실과 맞아떨어져서 정말 신기했어요. 사업에 큰 도움이 되었어요.', author: '황지수', location: '수원' }
      ],
    }
  }
};
</script>

<style scoped>
  .testimonials {
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin: 2rem 0;
  }

  .testimonials h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .testimonial-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-sizing: border-box;
  }

  .testimonial-content {
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  .testimonial-author {
    text-align: right;
    font-weight: bold;
    color: #555;
  }
</style>
