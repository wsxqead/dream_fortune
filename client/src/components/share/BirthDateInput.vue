<template>
  <div class="input_group">
    <label>birth</label>
    <div class="birth-group">
      <select
        class="user-select"
        v-model="innerBirthDate.year"
        @change="handleYearChange"
      >
        <option disabled :value="0">출생 연도</option>
        <option
          v-for="year in generateOptions(1900, currentYear)"
          :key="year"
          :value="year"
        >
          {{ year }}
        </option>
      </select>
      <select
        class="user-select"
        v-model="innerBirthDate.month"
        @change="handleMonthChange"
        :disabled="innerBirthDate.year === 0"
      >
        <option disabled :value="0">월</option>
        <option
          v-for="month in generateOptions(1, 12)"
          :key="month"
          :value="month"
        >
          {{ month }}
        </option>
      </select>
      <select
        class="user-select"
        v-model="innerBirthDate.day"
        :disabled="innerBirthDate.year === 0 || innerBirthDate.month === 0"
      >
        <option disabled :value="0">일</option>
        <option v-for="day in generateDayOptions" :key="day" :value="day">
          {{ day }}
        </option>
      </select>
    </div>
    <p v-if="innerBirthDate.day > 0">
      {{
        isBirthDateValid
          ? "생년월일이 유효합니다."
          : "생년월일이 유효하지 않습니다."
      }}
    </p>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import useSignUpStore from "@/hooks/useSignUpStore";

export default {
  setup() {
    const currentYear = new Date().getFullYear();
    const innerBirthDate = ref({ year: 0, month: 0, day: 0 });
    const isBirthDateValid = ref(false);
    const { setBirthDate, setBirthDateValid } = useSignUpStore();

    const isValidBirthDate = (year, month, day) => {
      if (year < 1900 || year > currentYear) return false;
      if (month < 1 || month > 12) return false;
      if (day < 1 || day > new Date(year, month, 0).getDate()) return false;
      return true;
    };

    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    const generateOptions = (start, end) => {
      const options = [];
      for (let i = start; i <= end; i++) {
        options.push(i);
      }
      return options;
    };

    const generateDayOptions = computed(() => {
      let daysInMonth = 31;
      if (innerBirthDate.value.month === 2) {
        daysInMonth = isLeapYear(innerBirthDate.value.year) ? 29 : 28;
      } else if ([4, 6, 9, 11].includes(innerBirthDate.value.month)) {
        daysInMonth = 30;
      }
      return generateOptions(1, daysInMonth);
    });

    const handleYearChange = (event) => {
      innerBirthDate.value.year = parseInt(event.target.value);
    };

    const handleMonthChange = (event) => {
      innerBirthDate.value.month = parseInt(event.target.value);
    };

    watch(
      () => innerBirthDate.value,
      (newVal) => {
        const { year, month, day } = newVal;
        const valid = isValidBirthDate(year, month, day);
        isBirthDateValid.value = valid;
        setBirthDate(valid ? `${year}-${month}-${day}` : "");
        setBirthDateValid(valid);
      },
      { deep: true }
    );

    return {
      innerBirthDate,
      isBirthDateValid,
      generateOptions,
      generateDayOptions,
      handleYearChange,
      handleMonthChange,
      currentYear,
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

.birth-group {
  display: flex;
  flex-direction: row;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.user-select {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  text-transform: none;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  flex: 1;
  color: #000;
  height: 2.5rem;
}
</style>
