<template>
  <div class="input_group">
    <div class="agree_box">
      <div class="agree_header">
        <label class="label-cbx">
          <input
            type="checkbox"
            class="invisible"
            :checked="isAgreedTerms"
            @change="handleAgreedTermsCheck"
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path
                d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
              ></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
          <span class="agree_title" @click="handleActiveTerms">
            서비스 이용약관
            <h4>(필수)</h4>
          </span>
        </label>
      </div>
      <div v-if="isActiveTerms" class="agree_detail"></div>
    </div>
    <div class="agree_box">
      <div class="agree_header">
        <label class="label-cbx">
          <input
            type="checkbox"
            class="invisible"
            :checked="isAgreedPolicy"
            @change="handleAgreedPolicyCheck"
          />
          <div class="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path
                d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
              ></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
          <span class="agree_title" @click="handleActivePolicy">
            개인정보 수집 및 이용동의
            <h4>(필수)</h4>
          </span>
        </label>
      </div>
      <div v-if="isActivePolicy" class="agree_detail"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useSignUpStore from "@/hooks/useSignUpStore";

const { isAgreedTerms, isAgreedPolicy, setIsAgreedTerms, setIsAgreedPolicy } =
  useSignUpStore();
const isActiveTerms = ref(false);
const isActivePolicy = ref(false);

const handleActiveTerms = () => {
  isActiveTerms.value = !isActiveTerms.value;
};

const handleAgreedTermsCheck = () => {
  setIsAgreedTerms(!isAgreedTerms.value);
};

const handleActivePolicy = () => {
  isActivePolicy.value = !isActivePolicy.value;
};

const handleAgreedPolicyCheck = () => {
  setIsAgreedPolicy(!isAgreedPolicy.value);
};
</script>

<style scoped>
.input_group {
  position: relative;
  margin-bottom: 2rem;
}

.agree_box {
  position: relative;
  height: 2.5rem;
  text-align: left;
}

.agree_box .agree_header {
  height: 2.5rem;
}

.agree_box .agree_header h4 {
  display: inline-flex;
  color: #ea5759;
  margin: 0;
  margin-left: 5px;
}

.agree_box .agree_header .label-cbx {
  user-select: none;
  cursor: pointer;
  margin-bottom: 0;
  vertical-align: sub;
  vertical-align: -webkit-baseline-middle;
}

.agree_box .agree_header .label-cbx .invisible {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
}

.agree_box .agree_header .label-cbx input:checked + .checkbox {
  border-color: #63a5ff;
}

.agree_box .agree_header .label-cbx input:checked + .checkbox svg path {
  fill: #63a5ff;
}

.agree_box .agree_header .label-cbx input:checked + .checkbox svg polyline {
  stroke-dashoffset: 0;
}

.agree_box .agree_header .label-cbx:hover .checkbox svg path {
  stroke-dashoffset: 0;
}

.agree_box .agree_header .checkbox {
  position: relative;
  top: 0.5rem;
  float: left;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: 2px solid #c8ccd4;
  border-radius: 3px;
  box-sizing: border-box;
}

.agree_box .agree_header .checkbox svg {
  position: absolute;
  top: -2px;
  left: -2px;
}

.agree_box .agree_header .checkbox svg path {
  fill: none;
  stroke: #63a5ff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 71px;
  stroke-dashoffset: 71px;
  transition: all 0.6s ease;
}

.agree_box .agree_header .checkbox svg polyline {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 18px;
  stroke-dashoffset: 18px;
  transition: all 0.3s ease;
}

.agree_box .agree_header .label-cbx > span {
  pointer-events: none;
  vertical-align: middle;
}

</style>
