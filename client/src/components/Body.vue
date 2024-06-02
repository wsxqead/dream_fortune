<template>
  <div class="body">
    <div class="fortune-section">
      <h2>Get Your Fortune</h2>
      <select v-model="fortuneType">
        <option value="general">General</option>
        <option value="love">Love</option>
        <option value="career">Career</option>
      </select>
      <button @click="fetchFortune">Get Fortune</button>
      <p>{{ fortuneResult }}</p>
    </div>

    <div class="compatibility-section">
      <h2>Check Compatibility</h2>
      <input v-model="name1" placeholder="Name 1" />
      <input v-model="name2" placeholder="Name 2" />
      <button @click="fetchCompatibility">Check Compatibility</button>
      <p>{{ compatibilityResult }}</p>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Body',
  data() {
    return {
      fortuneType: 'general',
      name1: '',
      name2: '',
      fortuneResult: '',
      compatibilityResult: '',
    };
  },
  methods: {
    async fetchFortune() {
      const response = await axios.get('http://localhost:3000/fortune', {
        params: { type: this.fortuneType },
      });
      this.fortuneResult = response.data;
    },
    async fetchCompatibility() {
      const response = await axios.get('http://localhost:3000/compatibility', {
        params: { name1: this.name1, name2: this.name2 },
      });
      this.compatibilityResult = response.data;
    },
  },
};
</script>

<style scoped>
.body {
  padding: 1rem;
}
.fortune-section,
.compatibility-section {
  margin-bottom: 2rem;
}
</style>
