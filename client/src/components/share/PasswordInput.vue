<template>
  <div class="input_group sign-up-pass">
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      v-model="innerPassword"
      placeholder="비밀번호를 입력해주세요"
      title="비밀번호"
      class="user-input"
      @blur="handlePasswordBlur"
      @change="handlePasswordChange"
    />
  </div>
  <div class="input_group sign-up-pass">
    <label for="rePassword">Confirm Password</label>
    <input
      id="rePassword"
      type="password"
      v-model="innerRePassword"
      placeholder="비밀번호를 재입력해주세요"
      title="비밀번호확인"
      class="user-input"
      @blur="handleRePasswordBlur"
      @change="handleRePasswordChange"
    />
    <p class="vaild_msg" v-if="valid">{{ valid }}</p>
    <p class="err_msg" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignUpStore from "@/hooks/useSignUpStore";

export default {
  setup() {
    const regPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const { password, setPassword, setPasswordValid } = useSignUpStore();
    const innerPassword = ref("");
    const innerRePassword = ref("");
    const error = ref("");
    const valid = ref("");

    const handlePasswordBlur = () => {
      if (!regPattern.test(innerPassword.value)) {
        error.value =
          "영문, 숫자, 특수문자 조합으로 이루어진 8~15자만 사용 가능합니다.";
        valid.value = "";
      } else if (!innerPassword.value) {
        error.value = "비밀번호를 입력해 주세요.";
        valid.value = "";
      } else if (!innerRePassword.value) {
        error.value = "비밀번호 확인을 입력해 주세요.";
        valid.value = "";
      } else if (
        innerPassword.value &&
        innerRePassword.value &&
        innerPassword.value !== innerRePassword.value
      ) {
        error.value = "비밀번호가 일치하지 않습니다.";
        valid.value = "";
      } else {
        error.value = "";
        valid.value = "사용 가능한 비밀번호입니다.";
        setPasswordValid(true);
      }
    };

    const handlePasswordChange = () => {
      setPassword(innerPassword.value);
      setPasswordValid(false);
      error.value = "";
      valid.value = "";
    };

    const handleRePasswordBlur = () => {
      if (!regPattern.test(innerRePassword.value)) {
        error.value =
          "영문, 숫자, 특수문자 조합으로 이루어진 8~15자만 사용 가능합니다.";
        valid.value = "";
      } else if (!innerPassword.value) {
        error.value = "비밀번호를 입력해 주세요.";
        valid.value = "";
      } else if (!innerRePassword.value) {
        error.value = "비밀번호 확인을 입력해 주세요.";
        valid.value = "";
      } else if (
        innerPassword.value &&
        innerRePassword.value &&
        innerPassword.value !== innerRePassword.value
      ) {
        error.value = "비밀번호가 일치하지 않습니다.";
        valid.value = "";
      } else {
        error.value = "";
        valid.value = "사용 가능한 비밀번호입니다.";
        setPasswordValid(true);
      }
    };

    const handleRePasswordChange = () => {
      setPassword(innerPassword.value);
      setPasswordValid(false);
      error.value = "";
      valid.value = "";
    };

    return {
      password,
      innerPassword,
      innerRePassword,
      error,
      valid,
      handlePasswordBlur,
      handlePasswordChange,
      handleRePasswordBlur,
      handleRePasswordChange,
    };
  },
};
</script>

<style scoped>
.input_group {
  position: relative;
}

.input_group label {
  height: 2.5rem;
  display: block;
  line-height: 2.5rem;
}

.user-input {
  width: 100%;
  padding: 1.25rem 0.8rem;
  margin-top: 0;
  margin-bottom: 2rem;
  box-sizing: border-box;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
}

.err_msg {
  padding: 0 0.8rem;
  font-size: smaller;
  color: #ea5759;
  position: absolute;
  bottom: 0;
  top: 4.5rem;
}

.vaild_msg {
  padding: 0 0.8rem;
  color: #63a5ff;
  font-size: smaller;
  position: absolute;
  bottom: 0;
  top: 4.5rem;
}
</style>
