<template>
  <div class="recommended-fortunes">
    <h2>오늘의 행운의 아이템</h2>
    <p>오늘 당신에게 추천되는 특별한 아이템을 확인해보세요.</p>
    <ul>
      <li><strong>행운의 숫자</strong>: 7</li>
      <li><strong>행운의 색깔</strong>: 파란색</li>
      <li><strong>행운의 시간</strong>: 오후 3시</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecommendedFortunes',
};
</script>

<style scoped>
  .recommended-fortunes {
    color: #fff;
    padding: 3rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    background-image: url('@/assets/recommendedBackgruod.jpg');
    background-size: cover;
    background-position: center;
    gap: 8px;
    flex-direction: column;
    display: flex;
    aspect-ratio: 1456 / 728;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .recommended-fortunes h2 {
    border-radius: 8px;
    border: 1px solid rgba(19, 10, 10, 0.5);
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 16px 24px;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 125%;
    letter-spacing: -0.48px;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    margin: 0px auto;
    justify-content: center;
    align-items: start;
    display: flex;
    gap: 4px;
  }

  li {
    margin: 0.5rem 0;
    padding: 4px 12px;
    border-radius: 100px;
    background: rgb(22, 104, 220);
    backdrop-filter: blur(8px);
    font-size: 14px;
  }

  @media  screen and (max-width:1024px) {
    .recommended-fortunes {
      gap: 6px;
    }

    .recommended-fortunes h2 {
      font-size: 36px
    }
  }

  @media screen and (max-width: 768px) {
    .recommended-fortunes {
      gap: 4px;
    }

    .recommended-fortunes h2 {
      font-size: 24px
    }

    .recommended-fortunes p {
      word-break: keep-all;
    }
  }
</style>
