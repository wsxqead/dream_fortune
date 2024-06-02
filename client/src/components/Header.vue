<template>
  <header>
    <h1><router-link to="/"><img src ="/luck_logo_wn.png"></router-link></h1>
    <nav>
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
    background-color: #8E44AD;
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
