<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./styles/main.css"></style>
<style scoped>
.main-content {
  flex-grow: 1;
  padding-bottom: 4rem;
  margin-bottom: 1rem;
}
</style>