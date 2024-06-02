<template>
  <div class="character-introduction">
    <h2>캐릭터 소개</h2>
    <div class="character-cards">
      <div v-for="character in characters" :key="character.id" class="character-card">
        <img :src="character.image" :alt="character.name" />
        <h3>{{ character.name }}</h3>
        <p>{{ character.description }}</p>
        <!-- <router-link :to="character.link" class="btn">더 알아보기</router-link> -->
        <router-link :to="{ path: '/characters/' + character.id }" class="btn">더 알아보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterIntroduction',
  data() {
    return {
      characters: [
        { id: 1, name: '루나', image: require('@/assets/Luna.jpg'), description: '달을 상징하는 루나는 부드러운 성격과 깊은 통찰력을 가지고 있습니다. 항상 이른 아침부터 별들과 함께 오늘의 운세를 읽어옵니다.', link: '/characters/luna' },
        { id: 2, name: '스텔라', image: require('@/assets/Stella.jpg'), description: '스텔라는 하늘을 나는 별을 상징하는 캐릭터입니다. 특별한 힘이 담긴 별들 사이에서 궁합을 읽어내어 사랑과 운명을 이끌어 냅니다.', link: '/characters/stella' },
        { id: 3, name: '아리', image: require('@/assets/Ari.jpg'), description: '아리는 총명하고 활기찬 성격의 소유자입니다. 각종 띠별 운세를 읽어내어 모두가 행복하고 긍정적인 결과를 얻을 수 있도록 노력합니다.', link: '/characters/ari' },
        { id: 4, name: '세리나', image: require('@/assets/Serena.jpg'), description: '세리나는 우주의 비밀을 알고 있는 것처럼 신비로운 존재입니다. 별자리와 우주의 흐름을 읽어내어 오늘의 운세를 예측합니다.', link: '/characters/serena' }
      ],
    };
  },
};
</script>

<style scoped>
  .character-introduction {
    padding: 2rem;
  }

  .character-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .character-card {
    width: 300px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }

  .character-card img {
    width: 100%;
    border-radius: 50%;
  }

  .character-card h3 {
    margin: 0.5rem 0;
  }

  .character-card p {
    font-size: 0.9rem;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 1500px) {
    .character-card {
      width: 250px;
    }
  }

  @media screen and (max-width: 1300px) {
    .character-introduction {
      padding: 1rem;
    }
    .character-card {
      width: 200px;
    }
  }

  @media screen and (max-width: 1080px) {
    .character-card {
      width: 180px;
    }
  }

  @media screen and (max-width: 1000px) {
    .character-introduction {
      padding: 0rem;
    }

    .character-card {
      width: 160px;
    }
  }

  @media screen and (max-width: 880px) {
    .character-card {
      width: 140px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .character-card {
      width: 130px;
    }
  }

  @media screen and (max-width: 768px) {
    .character-card {
      width: 39%;
    }
  }
</style>
