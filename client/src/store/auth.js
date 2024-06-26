import * as authApi from "@/api/auth";
import { fetchProfile } from "@/api/users";

const state = {
  user: localStorage.getItem("user") || null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    localStorage.setItem("user", user);
  },
  CLEAR_USER(state) {
    state.user = null;
    localStorage.removeItem("user");
  },
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await authApi.signIn(credentials);
      if (response && response.message === "로그인 성공") {
        const response2 = await fetchProfile();
        commit("SET_USER", response2);
      }
    } catch (error) {
      commit("CLEAR_USER");
      throw error;
    }
  },
  logout({ commit }) {
    commit("CLEAR_USER");
  },
  async checkAuth({ commit }) {
    try {
      const response = await fetchProfile();
      commit("SET_USER", response);
    } catch (error) {
      commit("CLEAR_USER");
    }
  },
};

const getters = {
  isLoggedIn: (state) => !!state.user,
  user: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
