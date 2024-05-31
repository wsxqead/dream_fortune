<template>
  <div class="mypage">
    <h2>My Page</h2>
    <div v-if="todayFortune">
      <h3>Today's Fortune</h3>
      <p>{{ todayFortune }}</p>
    </div>
    <div v-else>
      <button @click="getTodayFortune">Get Today's Fortune</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyPage',
  data() {
    return {
      todayFortune: null,
    };
  },
  mounted() {
    this.checkTodayFortune();
  },
  methods: {
    async getTodayFortune() {
      try {
        const response = await axios.get('http://localhost:3000/fortune/today', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        this.todayFortune = response.data.fortune;
        localStorage.setItem('todayFortune', JSON.stringify({
          date: new Date().toDateString(),
          fortune: this.todayFortune
        }));
      } catch (error) {
        console.error("Failed to fetch today's fortune:", error);
      }
    },
    checkTodayFortune() {
      const storedFortune = JSON.parse(localStorage.getItem('todayFortune'));
      if (storedFortune && storedFortune.date === new Date().toDateString()) {
        this.todayFortune = storedFortune.fortune;
      }
    },
  },
};
</script>

<style scoped>
.mypage {
  padding: 1rem;
  max-width: 480px;
  margin: 0 auto;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
