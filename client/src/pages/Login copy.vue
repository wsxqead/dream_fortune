<template>
  <div class="user-content">
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <custom-input
          label="LoginId:"
          type="text"
          id="loginId"
          v-model="loginId"
          customClass="custom-input"
        />
        <custom-input
          label="Password:"
          type="password"
          id="password"
          v-model="password"
          customClass="custom-input"
        />
        <custom-button type="submit" customClass="custom-button">
          Login
        </custom-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomInput from "@/components/share/CustomInput.vue";
import CustomButton from "@/components/share/CustomButton.vue";

export default {
  name: "Login",
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      loginId: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      await this.login({ loginId: this.loginId, password: this.password });
      // try {
      //   await this.login({ loginId: this.loginId, password: this.password })
      //   // this.$router.push("/mypage");
      // } catch (error) {
      //   alert("Invalid loginId or password");
      // }
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
}
</style>
