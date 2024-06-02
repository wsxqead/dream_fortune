<template>
  <div class="key-services">
    <h2>주요 서비스</h2>
    <ul>
      <li><strong>일일 운세</strong>: 매일 매일 당신의 하루를 예측해보세요.</li>
      <li><strong>사랑의 운세</strong>: 사랑에 관한 조언과 예측을 받아보세요.</li>
      <li><strong>직업 운세</strong>: 직장에서의 성공을 위한 길을 찾아보세요.</li>
      <li><strong>포츈쿠키</strong>: 포츈쿠키를 통해 오늘의 운세를 확인해보세요.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KeyServices',
};
</script>

<style scoped>
  .key-services {
    padding: 1rem;
    background-color: #e9ecef;
    border-radius: 8px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
  }
</style>
