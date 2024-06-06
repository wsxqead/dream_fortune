<template>
  <div class="input_group sign-up-nickname">
    <label for="nickname">Nickname</label>
    <input
      id="nickname"
      type="text"
      v-model="innerNickname"
      placeholder="닉네임 입력를 입력해주세요"
      title="닉네임"
      class="user-input"
      @blur="handleNicknameBlur"
      @change="handleNicknameChange"
    />
    <button @click="handleConfirmNickDuplication">중복 확인</button>
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
    const nickNamePattern = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,15}$/;
    const { nickname, setNickname, setNicknameValid } = useSignUpStore();
    const innerNickname = ref("");
    const error = ref("");
    const valid = ref("");

    const handleNicknameBlur = () => {
      if (!nickNamePattern.test(innerNickname.value)) {
        error.value = "2~15자의 영문 소문자와 한글, 숫자만 사용 가능합니다.";
        valid.value = "";
      } else {
        error.value = "";
        valid.value = "";
      }
    };

    const handleNicknameChange = () => {
      setNickname(innerNickname.value);
      setNicknameValid(false);
      error.value = "";
      valid.value = "";
    };

    const handleConfirmNickDuplication = async () => {
      if (!innerNickname.value) {
        error.value = "값을 입력해 주세요.";
        return;
      }

      try {
        const dupCheck = await authApi.nickNameDupCheck({
          nickname: innerNickname.value,
        });
        if (!dupCheck) {
          error.value = "요청이 실패 하였습니다.";
          return;
        }
        if (dupCheck.message) {
          if (nickNamePattern.test(innerNickname.value)) {
            error.value = "";
            valid.value = "사용 가능한 닉네임입니다.";
            setNickname(innerNickname.value);
            setNicknameValid(true);
          } else {
            error.value = "닉네임 형식이 올바르지 않습니다.";
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
      nickname,
      innerNickname,
      error,
      valid,
      handleNicknameBlur,
      handleNicknameChange,
      handleConfirmNickDuplication,
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
  background-color: transparent;
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
