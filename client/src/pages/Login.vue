<template>
  <div class="user-content">
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="loginId">LoginId:</label>
          <input
            type="text"
            id="loginId"
            v-model="loginId"
            class="custom-input"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="custom-input"
          />
        </div>
        <div>
          <button type="submit" class="custom-button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loginId: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      try {
        await this.login({ loginId: this.loginId, password: this.password });
        this.$router.push("/mypage");
      } catch (error) {
        alert("Invalid loginId or password");
      }
    },
  },
};
</script>

<style scoped>
.user-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  padding: 1rem;
  max-width: 480px;
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
  box-sizing: border-box;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
}

.custom-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #8e44ad;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #6c3387;
}
</style>
