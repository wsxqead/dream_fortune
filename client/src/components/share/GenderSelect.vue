<template>
  <div class="input_group">
    <label for="gender">Gender</label>
    <select
      class="user-select"
      @change="handleGenderChange"
      v-model="selectedGender"
    >
      <option disabled value="0">성별 선택</option>
      <option value="1">남성</option>
      <option value="2">여성</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useSignUpStore from "@/hooks/useSignUpStore";

const { setGender } = useSignUpStore();
const selectedGender = ref("0");

const handleGenderChange = (event) => {
  const value = parseInt(event.target.value);
  if (value === 1) {
    setGender("M");
  } else if (value === 2) {
    setGender("F");
  }
};
</script>

<style scoped>
.input_group {
  position: relative;
  margin-bottom: 2rem;
}

.input_group label {
  height: 2.5rem;
  display: block;
  line-height: 2.5rem;
}

.user-select {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-transform: none;
  padding: 8px;
  border-radius: 4px;
  flex: 1;
  width: 100%;
  color: #000;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
  height: 2.5rem;
}
</style>
