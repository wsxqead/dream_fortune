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
  data() {
    return {
      isLoggedIn: false,
      user: null,
    };
  },
  created() {
    // 스토어의 상태를 초기화합니다.
    this.isLoggedIn = this.$store.getters.isLoggedIn;
    this.user = this.$store.getters.user;

    // 스토어의 상태가 변경될 때마다 데이터를 업데이트합니다.
    this.$store.watch(
      () => this.$store.getters.isLoggedIn,
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
    this.$store.watch(
      () => this.$store.getters.user,
      (user) => {
        this.user = user;
      }
    );
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
