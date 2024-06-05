<template>
  <div class="key-services">
    <h2>주요 서비스</h2>
    <ul>
      <li><strong>일일 운세</strong>: 매일 매일 당신의 하루를 예측해보세요.</li>
      <li>
        <strong>사랑의 운세</strong>: 사랑에 관한 조언과 예측을 받아보세요.
      </li>
      <li>
        <strong>직업 운세</strong>: 직장에서의 성공을 위한 길을 찾아보세요.
      </li>
      <li>
        <strong>포츈쿠키</strong>: 포츈쿠키를 통해 오늘의 운세를 확인해보세요.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KeyServices",
};
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.key-services {
  padding: 1rem 2rem;
  background-color: #e9ecef;
  border-radius: 8px;
  animation: fadeInUp 0.5s ease-out;
  max-width: 100%;
  width: 1080px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
}

li:hover {
  transform: scale(1.05);
  background-color: #f8f9fa;
}

li strong {
  margin-right: 0.5rem;
}

.icon {
  margin-right: 1rem;
  font-size: 1.5rem;
}

@media screen and (max-width: 1200px) {
  .key-services {
    width: 100%;
    box-sizing: border-box;
    word-break: keep-all;
    font-size: medium;
  }
}

@media screen and (max-width: 768px) {
  .key-services {
    font-size: smaller;
  }
}
</style>
