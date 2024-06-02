<template>
  <div class="fortune-cards">
    <h2>오늘의 운세 카드</h2>
    <div class="cards">
      <div class="card">
        <img src="@/assets/card/love_luck.jpg" />
        <h3>사랑의 운세 카드</h3>
        <p>오늘의 사랑 운세를 확인하세요.</p>
      </div>
      <div class="card">
        <img src="@/assets/card/money_luck.jpg" />
        <h3>재물 운세 카드</h3>
        <p>오늘의 재물 운세를 확인하세요.</p>
      </div>
      <div class="card">
        <img src="@/assets/card/health_luck.jpg" />
        <h3>건강 운세 카드</h3>
        <p>오늘의 건강 운세를 확인하세요.</p>
      </div>
      <div class="card">
        <img src="@/assets/card/interpersonal_luck.jpg" />
        <h3>대인 관계의 운세 카드</h3>
        <p>오늘의 대인 관계 운세를 확인하세요.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FortuneCards',
};
</script>

<style scoped>
  .fortune-cards {
    padding: 1rem;
    background-color: #fff;
    text-align: center;
  }

  .fortune-cards .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .fortune-cards .cards .card {
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem;
    flex-basis: 20%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .fortune-cards .cards .card img {
    max-width: 100%;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  @media  screen and (max-width:1024px) {
    .fortune-cards .cards .card {
      flex-basis: 42%;
    }

    .fortune-cards .cards .card h3 {
      font-size: larger;
    }

    .fortune-cards .cards .card p {
      font-size: medium;
    }
  }

  @media screen and (max-width: 768px) {
    .fortune-cards .cards .card {
      flex-basis: 35%;
    }

    .fortune-cards .cards .card h3 {
      font-size: medium;
      word-spacing: -5px;
    }

    .fortune-cards .cards .card p {
      font-size: small;
    }
  }

</style>
