<template>
  <header>
    <h1>
      <router-link to="/"><img src="/luck_logo_wn.png" /></router-link>
    </h1>
    <nav>
      <router-link v-if="isLoggedIn" to="/mypage">{{
        user.loginId
      }}</router-link>
      <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #8e44ad;
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid #cecece;
}

header h1 {
  margin: 0;
  line-height: 1em;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #ffffff;
}

nav a:hover {
  text-decoration: underline;
}
</style>
