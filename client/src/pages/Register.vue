<template>
  <div class="register">
    <h2>Register</h2>
    <div @submit.prevent="register">
      <LoginIdInput />
      <NicknameInput />
      <PasswordInput />
      <BirthDateInput />
      <GenderSelect />
      <AgreeWrap />

      <custom-button @click="register" :disabled="!isFormValid">
        Register
      </custom-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useSignUpStore from "@/hooks/useSignUpStore";
import userApi from "@/api/users";
import CustomButton from "@/components/share/CustomButton.vue";
import LoginIdInput from "@/components/share/LoginIdInput.vue";
import NicknameInput from "@/components/share/NicknameInput.vue";
import PasswordInput from "@/components/share/PasswordInput.vue";
import BirthDateInput from "@/components/share/BirthDateInput.vue";
import GenderSelect from "@/components/share/GenderSelect.vue";
import AgreeWrap from "@/components/share/AgreeWrap.vue";

const router = useRouter();
const {
  loginId,
  nickname,
  password,
  birthDate,
  gender,
  isAgreedTerms,
  isAgreedPolicy,
  loginIdValid,
  nicknameValid,
  passwordValid,
  birthDateValid,
} = useSignUpStore();

const isFormValid = computed(
  () =>
    loginIdValid.value &&
    nicknameValid.value &&
    passwordValid.value &&
    birthDateValid.value &&
    isAgreedTerms.value &&
    isAgreedPolicy.value
);

const register = async () => {
  if (!isFormValid.value) {
    alert("모든 값을 입력해주세요.");
    return;
  }

  try {
    await userApi.register({
      loginId: loginId.value,
      nickname: nickname.value,
      password: password.value,
      birthDate: birthDate.value,
      gender: gender.value,
    });
    router.push("/");
  } catch (error) {
    console.error("Error registering user", error);
  }
};
</script>

<style scoped>
.user-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register {
  padding: 1rem;
  max-width: 480px;
  margin: 0 auto;
}

form div {
  margin-bottom: 1rem;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
}

form input,
form select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.birthdate {
  display: flex;
  justify-content: space-between;
}

.birthdate > div {
  width: 30%;
}

span {
  color: red;
  font-size: 0.875rem;
}
</style>
