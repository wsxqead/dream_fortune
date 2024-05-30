<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <custom-input
        label="Username:"
        type="text"
        id="username"
        v-model="username"
        customClass="custom-input"
      />
      <custom-input
        label="Password:"
        type="password"
        id="password"
        v-model="password"
        customClass="custom-input"
      />
      <custom-button
        type="submit"
        customClass="custom-button"
      >  Login
      </custom-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import CustomInput from '@/components/share/CustomInput.vue'
import CustomButton from '@/components/share/CustomButton.vue'

export default {
  name: 'Login',
  components: {
    CustomInput,
    CustomButton
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/mypage');
      } catch (error) {
        alert('Invalid username or password');
      }
    },
  },
};
</script>

<style scoped>
.login {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

form div {
  margin-bottom: 1rem;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
}

form input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
