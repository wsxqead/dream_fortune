import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

const app = createApp(App);

app.use(store);
app.use(router);

store.dispatch("auth/checkAuth");

app.mount("#app");
