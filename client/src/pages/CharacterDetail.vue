<template>
  <div class="character-detail">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" :alt="character.name" />
    <p>{{ character.description }}</p>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="input" placeholder="Ask something..." />
      <button type="submit">Send</button>
    </form>
    <div v-if="response">{{ response }}</div>
  </div>
</template>

<script>
import { sendChat } from "@/api/chat";

export default {
  name: "CharacterDetail",
  data() {
    return {
      character: null,
      input: "",
      response: "",
    };
  },
  created() {
    const characterId = this.$route.params.id;
    this.character = this.getCharacterById(characterId);
  },
  methods: {
    getCharacterById(id) {
      const characters = [
        {
          id: 1,
          name: "루나",
          image: require("@/assets/char/Luna.jpg"),
          description:
            "루나는 별과 달이 빛나는 마법의 숲에서 자랐습니다. 그녀는 밤하늘의 비밀을 읽는 능력을 가지고 있습니다.",
          url: "https://chatgpt.com/g/g-BplXslRT8-runa",
        },
        {
          id: 2,
          name: "스텔라",
          image: require("@/assets/char/Stella.jpg"),
          description:
            "스텔라는 우주 탐험가 부모 밑에서 자라, 어린 시절부터 별과 행성에 대한 지식을 쌓아왔습니다.",
          url: "https://chatgpt.com/g/g-SJ25JvLFq-seutelra",
        },
        {
          id: 3,
          name: "아리",
          image: require("@/assets/char/Ari.jpg"),
          description:
            "아리는 전통적인 마을에서 자랐으며, 띠별 운세와 관련된 풍습과 전통을 배웠습니다.",
          url: "https://chatgpt.com/g/g-ppZY8UkF1-ari",
        },
        {
          id: 4,
          name: "세리나",
          image: require("@/assets/char/Serena.jpg"),
          description:
            "세리나는 심리학자를 부모로 두고 자라, 어릴 때부터 다양한 심리 테스트와 사람들의 마음을 이해하는 법을 배웠습니다.",
          url: "https://chatgpt.com/g/g-f58n0Qdtg-serina",
        },
        {
          id: 5,
          name: "릴리안",
          image: require("@/assets/char/Lillian.jpg"),
          description:
            "릴리안은 마법의 정원에서 태어나고 자랐으며, 탄생석과 탄생화의 비밀을 알고 있습니다.",
          url: "https://chatgpt.com/g/g-YLQEk0osQ-rilrian",
        },
      ];
      return characters.find((character) => character.id === parseInt(id));
    },
    async handleSubmit() {
      if (!this.character || !this.character.url) return;
      try {
        const result = await sendChat({
          prompt: this.input,
          url: this.character.url,
        });
        this.response = result;
      } catch (error) {
        console.error(error);
      }
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
