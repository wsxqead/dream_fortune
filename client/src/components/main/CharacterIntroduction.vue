<template>
  <div class="character-introduction">
    <h2>캐릭터 소개</h2>
    <div class="character-cards">
      <div
        v-for="character in characters"
        :key="character.id"
        class="character-card"
      >
        <img :src="character.image" :alt="character.name" />
        <h3>{{ character.name }}</h3>
        <p>{{ character.description }}</p>
        <!-- <router-link :to="character.link" class="btn">더 알아보기</router-link> -->
        <router-link :to="{ path: '/characters/' + character.id }" class="btn"
          >더 알아보기</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterIntroduction",
  data() {
    return {
      characters: [
        {
          id: 1,
          name: "루나",
          image: require("@/assets/char/Luna.jpg"),
          description:
            "루나는 별과 달이 빛나는 마법의 숲에서 자랐습니다. 그녀는 밤하늘의 비밀을 읽는 능력을 가지고 있습니다.",
          link: "/characters/luna",
        },
        {
          id: 2,
          name: "스텔라",
          image: require("@/assets/char/Stella.jpg"),
          description:
            "스텔라는 우주 탐험가 부모 밑에서 자라, 어린 시절부터 별과 행성에 대한 지식을 쌓아왔습니다.",
          link: "/characters/stella",
        },
        {
          id: 3,
          name: "아리",
          image: require("@/assets/char/Ari.jpg"),
          description:
            "아리는 전통적인 마을에서 자랐으며, 띠별 운세와 관련된 풍습과 전통을 배웠습니다.",
          link: "/characters/ari",
        },
        {
          id: 4,
          name: "세리나",
          image: require("@/assets/char/Serena.jpg"),
          description:
            "세리나는 심리학자를 부모로 두고 자라, 어릴 때부터 다양한 심리 테스트와 사람들의 마음을 이해하는 법을 배웠습니다.",
          link: "/characters/serena",
        },
        {
          id: 5,
          name: "릴리안",
          image: require("@/assets/char/Lillian.jpg"),
          description:
            "릴리안은 마법의 정원에서 태어나고 자랐으며, 탄생석과 탄생화의 비밀을 알고 있습니다.",
          link: "/characters/lillian",
        },
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

@media screen and (max-width: 1850px) {
  .character-card {
    width: 280px;
  }
}

@media screen and (max-width: 1750px) {
  .character-card {
    width: 260px;
  }
}

@media screen and (max-width: 1650px) {
  .character-card {
    width: 240px;
  }
}

@media screen and (max-width: 1600px) {
  .character-card {
    width: 230px;
  }
}

@media screen and (max-width: 1500px) {
  .character-card {
    width: 200px;
  }
}

@media screen and (max-width: 1350px) {
  .character-card {
    width: 24%;
  }
}

@media screen and (max-width: 1300px) {
  .character-introduction {
    padding: 1rem;
  }
}

@media screen and (max-width: 1080px) {
  .character-introduction {
    padding: 0rem;
  }
}

@media screen and (max-width: 800px) {
  .character-card {
    width: 190px;
  }
}

@media screen and (max-width: 768px) {
  .character-card {
    width: 39%;
  }
}
</style>
