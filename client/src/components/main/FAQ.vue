<template>
  <div class="faq">
    <h2>자주 묻는 질문</h2>
    <div v-for="(item, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleAnswer(index)">
        <h3>{{ item.question }}</h3>
        <span v-if="item.open">▲</span>
        <span v-else>▼</span>
      </div>
      <div class="faq-answer" v-if="item.open">
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqs: [
        { question: '오늘의 운세는 어떻게 확인하나요?', answer: '메인 페이지에서 오늘의 운세 섹션을 클릭하여 확인할 수 있습니다.', open: false },
        { question: '별자리 운세는 무엇인가요?', answer: '별자리 운세는 사용자의 생일을 기준으로 한 별자리 운세입니다.', open: false },
        { question: '띠별 운세는 무엇인가요?', answer: '띠별 운세는 사용자의 출생 연도에 따라 각 띠의 운세를 알려줍니다.', open: false },
        { question: '궁합은 어떻게 확인하나요?', answer: '궁합은 회원가입 후, 상대방의 정보를 입력하여 확인할 수 있습니다.', open: false },
        { question: '운세 결과는 얼마나 정확한가요?', answer: '운세 결과는 최신 알고리즘을 사용하여 계산되며, 재미로 참고하시길 바랍니다.', open: false },
        { question: '운세 결과를 공유할 수 있나요?', answer: '네, 운세 결과 페이지에서 공유 버튼을 클릭하여 SNS에 공유할 수 있습니다.', open: false },
        { question: '운세는 매일 업데이트되나요?', answer: '네, 오늘의 운세와 기타 운세들은 매일 업데이트됩니다.', open: false },
        { question: '다른 사람의 운세도 볼 수 있나요?', answer: '회원가입 후, 다른 사람의 정보를 입력하여 그 사람의 운세를 확인할 수 있습니다.', open: false },
        { question: '운세를 더 정확하게 보기 위해 필요한 정보가 있나요?', answer: '정확한 운세를 위해 생년월일과 성별 정보를 입력하는 것이 좋습니다.', open: false },
        { question: '운세 결과가 마음에 들지 않으면 어떻게 하나요?', answer: '운세 결과는 참고용입니다. 긍정적인 마인드로 하루를 보내세요!', open: false },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
  .faq {
    padding: 2rem;
  }

  .faq h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .faq-item {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .faq-question {
    padding: 1rem;
    background-color: #f7f7f7;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-answer {
    padding: 1rem;
    background-color: #fff;
  }
  
  @media screen and (max-width: 768px) {
    
  }
</style>
