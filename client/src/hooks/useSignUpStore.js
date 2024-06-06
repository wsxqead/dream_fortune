import { useStore } from "vuex";
import { computed } from "vue";

export default function useSignUpStore() {
  const store = useStore();

  return {
    loginId: computed(() => store.state.loginId),
    nickname: computed(() => store.state.nickname),
    password: computed(() => store.state.password),
    birthDate: computed(() => store.state.birthDate),
    gender: computed(() => store.state.gender),
    loginIdValid: computed(() => store.state.loginIdValid),
    nicknameValid: computed(() => store.state.nicknameValid),
    passwordValid: computed(() => store.state.passwordValid),
    birthDateValid: computed(() => store.state.birthDateValid),
    isAgreedTerms: computed(() => store.state.isAgreedTerms),
    isAgreedPolicy: computed(() => store.state.isAgreedPolicy),
    setLoginId: (loginId) => store.commit("setLoginId", loginId),
    setNickname: (nickname) => store.commit("setNickname", nickname),
    setPassword: (password) => store.commit("setPassword", password),
    setBirthDate: (birthDate) => store.commit("setBirthDate", birthDate),
    setGender: (gender) => store.commit("setGender", gender),
    setLoginIdValid: (valid) => store.commit("setLoginIdValid", valid),
    setNicknameValid: (valid) => store.commit("setNicknameValid", valid),
    setPasswordValid: (valid) => store.commit("setPasswordValid", valid),
    setBirthDateValid: (valid) => store.commit("setBirthDateValid", valid),
    setIsAgreedTerms: (isAgreed) => store.commit("setIsAgreedTerms", isAgreed),
    setIsAgreedPolicy: (isAgreed) =>
      store.commit("setIsAgreedPolicy", isAgreed),
  };
}
