<template>
  <div class="cta-section">
    <h2>지금 가입하고, 당신의 미래를 예측해보세요!</h2>
    <button>무료 회원가입</button>
  </div>
</template>

<script>
export default {
  name: 'RecommendedRegister',
};
</script>

<style scoped>
  .cta-section {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  .cta-section button {
    font-weight: 700;
    padding-left: 11rem;
    padding-right: 11rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: #5d9aec;
    border: 0;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    .cta-section button {
      padding-left: 9rem;
      padding-right: 9rem;
    }
    
    .cta-section h2 {
      word-break: keep-all;
    }
  }
</style>
