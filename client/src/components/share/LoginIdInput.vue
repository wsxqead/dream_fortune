<template>
  <div class="input_group sign-up-id">
    <label for="loginId">LoginId</label>
    <input
      id="loginId"
      type="text"
      v-model="innerLoginId"
      placeholder="아이디 입력를 입력해주세요"
      title="아이디"
      class="user-input"
      @blur="handleLoginIdBlur"
      @change="handleLoginIdChange"
    />
    <button @click="handleConfirmIdDuplication">중복 확인</button>
    <p class="vaild_msg" v-if="valid">{{ valid }}</p>
    <p class="err_msg" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import * as authApi from "@/api/auth";
import useSignUpStore from "@/hooks/useSignUpStore";

export default {
  setup() {
    const idPattern = /^[a-zA-Z0-9]{6,20}$/;
    const { loginId, setLoginId, setLoginIdValid } = useSignUpStore();
    const innerLoginId = ref("");
    const error = ref("");
    const valid = ref("");

    const handleLoginIdBlur = () => {
      if (!idPattern.test(innerLoginId.value)) {
        error.value = "6~20자의 영문 소문자와 숫자만 사용 가능합니다.";
        valid.value = "";
      } else {
        error.value = "";
        valid.value = "";
      }
    };

    const handleLoginIdChange = () => {
      setLoginId(innerLoginId.value);
      setLoginIdValid(false);
      error.value = "";
      valid.value = "";
    };

    const handleConfirmIdDuplication = async () => {
      if (!innerLoginId.value) {
        error.value = "값을 입력해 주세요.";
        return;
      }

      try {
        const dupCheck = await authApi.idDupCheck({
          loginId: innerLoginId.value,
        });
        if (!dupCheck) {
          error.value = "요청이 실패 하였습니다.";
          return;
        }
        if (dupCheck.message) {
          if (idPattern.test(innerLoginId.value)) {
            error.value = "";
            valid.value = "사용 가능한 아이디입니다.";
            setLoginId(innerLoginId.value);
            setLoginIdValid(true);
          } else {
            error.value = "아이디 형식이 올바르지 않습니다.";
            valid.value = "";
          }
        } else {
          error.value = dupCheck.errMessage;
        }
      } catch (error) {
        error.value = "서버 오류가 발생했습니다. 나중에 다시 시도해주세요.";
      }
    };

    return {
      loginId,
      innerLoginId,
      error,
      valid,
      handleLoginIdBlur,
      handleLoginIdChange,
      handleConfirmIdDuplication,
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

.input_group button {
  position: absolute;
  right: 1rem;
  top: 3rem;
  border: 0;
  font-weight: bold;
  background-color: #fff;
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
