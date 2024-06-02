<template>
  <div class="character-detail">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" :alt="character.name" />
    <p>{{ character.description }}</p>
    <p>더 많은 정보와 {{ character.name }}의 운세를 확인하려면 여기를 클릭하세요.</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetail',
  data() {
    return {
      character: null,
    };
  },
  created() {
    const characterId = this.$route.params.id;
    this.character = this.getCharacterById(characterId);
  },
  methods: {
    getCharacterById(id) {
      const characters = [
        { id: 1, name: '루나', image: require('@/assets/Luna.jpg'), description: '달을 상징하는 루나는 부드러운 성격과 깊은 통찰력을 가지고 있습니다. 항상 이른 아침부터 별들과 함께 오늘의 운세를 읽어옵니다.' },
        { id: 2, name: '스텔라', image: require('@/assets/Stella.jpg'), description: '스텔라는 하늘을 나는 별을 상징하는 캐릭터입니다. 특별한 힘이 담긴 별들 사이에서 궁합을 읽어내어 사랑과 운명을 이끌어 냅니다.' },
        { id: 3, name: '아리', image: require('@/assets/Ari.jpg'), description: '아리는 총명하고 활기찬 성격의 소유자입니다. 각종 띠별 운세를 읽어내어 모두가 행복하고 긍정적인 결과를 얻을 수 있도록 노력합니다.' },
        { id: 4, name: '세리나', image: require('@/assets/Serena.jpg'), description: '세리나는 우주의 비밀을 알고 있는 것처럼 신비로운 존재입니다. 별자리와 우주의 흐름을 읽어내어 오늘의 운세를 예측합니다.' }
      ];
      return characters.find(character => character.id === parseInt(id));
    },
  },
};
</script>

<style scoped>
  .character-detail {
    padding: 2rem;
    text-align: center;
  }

  .character-detail img {
    width: 200px;
    border-radius: 50%;
    margin: 1rem auto;
  }
</style>
