<template>
  <header>
    <h1>Fortune Teller</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/mypage">My Page</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}
</style>
