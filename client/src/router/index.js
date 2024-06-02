import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Main.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import MyPage from '../pages/MyPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/mypage', component: MyPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
