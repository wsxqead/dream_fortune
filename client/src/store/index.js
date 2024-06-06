import { createStore } from "vuex";
import auth from "./auth";

export default createStore({
  state: {
    loginId: "",
    nickname: "",
    password: "",
    birthDate: "",
    gender: "",
    loginIdValid: false,
    nicknameValid: false,
    passwordValid: false,
    birthDateValid: false,
    isAgreedTerms: false,
    isAgreedPolicy: false,
  },
  mutations: {
    setLoginId(state, loginId) {
      state.loginId = loginId;
    },
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setBirthDate(state, birthDate) {
      state.birthDate = birthDate;
    },
    setGender(state, gender) {
      state.gender = gender;
    },
    setLoginIdValid(state, valid) {
      state.loginIdValid = valid;
    },
    setNicknameValid(state, valid) {
      state.nicknameValid = valid;
    },
    setPasswordValid(state, valid) {
      state.passwordValid = valid;
    },
    setBirthDateValid(state, valid) {
      state.birthDateValid = valid;
    },
    setIsAgreedTerms(state, isAgreed) {
      state.isAgreedTerms = isAgreed;
    },
    setIsAgreedPolicy(state, isAgreed) {
      state.isAgreedPolicy = isAgreed;
    },
  },
  modules: {
    auth,
  },
});
