<template>
  <div class="register">
    <h2>Register</h2>
    <div @submit.prevent="register">
      <LoginIdInput />
      <NicknameInput />

      <custom-input
        label="Password"
        type="password"
        id="password"
        v-model="password"
        :error="passwordError"
        @validate="validatePassword"
      />
      <custom-input
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        :error="confirmPasswordError"
        @validate="validateConfirmPassword"
      />

      <div class="birthdate">
        <custom-input
          label="Year"
          type="text"
          id="birthYear"
          v-model="birthYear"
          :error="birthYearError"
          @input="updateBirthdate"
        />
        <custom-select
          label="Month"
          id="birthMonth"
          :options="availableMonths"
          v-model="birthMonth"
          :error="birthMonthError"
          @input="updateBirthdate"
        />
        <custom-select
          label="Day"
          id="birthDay"
          :options="availableDays"
          v-model="birthDay"
          :error="birthDayError"
        />
      </div>
      <div>
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="termsAgreed" />
          Agree to Terms and Conditions
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" v-model="privacyAgreed" />
          Agree to Privacy Policy
        </label>
      </div>

      <custom-button type="submit" :disabled="!termsAgreed || !privacyAgreed">
        Register
      </custom-button>
    </div>
  </div>
</template>

<script>
import userApi from "@/api/users";
import CustomInput from "@/components/share/CustomInput.vue";
import CustomButton from "@/components/share/CustomButton.vue";
import CustomSelect from "@/components/share/CustomSelect.vue";
import LoginIdInput from "@/components/share/LoginIdInput.vue";
import NicknameInput from "@/components/share/NicknameInput.vue";

export default {
  name: "Register",
  components: {
    CustomInput,
    CustomButton,
    CustomSelect,
    LoginIdInput,
    NicknameInput,
  },
  data() {
    return {
      loginId: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      gender: "male",
      termsAgreed: false,
      privacyAgreed: false,
      loginIdError: "",
      nicknameError: "",
      passwordError: "",
      confirmPasswordError: "",
      birthYearError: "",
      birthMonthError: "",
      birthDayError: "",
      availableMonths: [],
      availableDays: [],
    };
  },
  watch: {
    birthYear() {
      this.updateAvailableMonths();
    },
    birthMonth() {
      this.updateAvailableDays();
    },
  },
  methods: {
    validateLoginId() {
      this.loginIdError =
        this.loginId.length < 3
          ? "LoginId must be at least 3 characters long"
          : "";
    },
    async checkLoginId() {
      if (this.loginId) {
        try {
          const response = await userApi.checkLoginId(this.loginId);
          this.loginIdError = response.data.exists
            ? "LoginId already taken"
            : "";
        } catch (error) {
          console.error("Error checking loginId", error);
        }
      }
    },
    async checkNickname() {
      if (this.nickname) {
        try {
          const response = await userApi.checkNickname(this.nickname);
          this.nicknameError = response.data.exists
            ? "Nickname already taken"
            : "";
        } catch (error) {
          console.error("Error checking nickname", error);
        }
      }
    },
    validatePassword() {
      const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
      this.passwordError = !passwordRules.test(this.password)
        ? "Password must be at least 8 characters long and include uppercase, lowercase, and a number"
        : "";
    },
    validateConfirmPassword() {
      this.confirmPasswordError =
        this.password !== this.confirmPassword ? "Passwords do not match" : "";
    },
    updateBirthdate() {
      this.validateBirthYear();
      this.validateBirthMonth();
    },
    validateBirthYear() {
      const year = parseInt(this.birthYear, 10);
      this.birthYearError =
        isNaN(year) || year < 1900 || year > new Date().getFullYear()
          ? "Enter a valid year"
          : "";
    },
    validateBirthMonth() {
      this.birthMonthError = this.birthMonth === "" ? "Select a month" : "";
    },
    validateBirthDay() {
      this.birthDayError = this.birthDay === "" ? "Select a day" : "";
    },
    updateAvailableMonths() {
      if (this.birthYear) {
        this.availableMonths = Array.from({ length: 12 }, (_, i) => i + 1);
      } else {
        this.availableMonths = [];
        this.birthMonth = "";
        this.availableDays = [];
        this.birthDay = "";
      }
    },
    updateAvailableDays() {
      if (this.birthYear && this.birthMonth) {
        const year = parseInt(this.birthYear, 10);
        const month = parseInt(this.birthMonth, 10);
        const daysInMonth = new Date(year, month, 0).getDate();
        this.availableDays = Array.from(
          { length: daysInMonth },
          (_, i) => i + 1
        );
      } else {
        this.availableDays = [];
        this.birthDay = "";
      }
    },
    async register() {
      this.validateConfirmPassword();

      if (this.passwordError || this.confirmPasswordError) {
        return;
      }
      try {
        await userApi.register({
          loginId: this.loginId,
          nickname: this.nickname,
          password: this.password,
          birthdate: `${this.birthYear}-${this.birthMonth}-${this.birthDay}`,
          gender: this.gender,
          termsAgreed: this.termsAgreed,
          privacyAgreed: this.privacyAgreed,
        });
        this.$router.push("/login");
      } catch (error) {
        console.error("Error registering user", error);
      }
    },
  },
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
