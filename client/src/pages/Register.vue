<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" @blur="checkUsername" />
        <span v-if="usernameError">{{ usernameError }}</span>
      </div>
      <div>
        <label for="nickname">Nickname:</label>
        <input type="text" id="nickname" v-model="nickname" @blur="checkNickname" />
        <span v-if="nicknameError">{{ nicknameError }}</span>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" />
        <span v-if="passwordError">{{ passwordError }}</span>
      </div>
      <div>
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" v-model="birthdate" />
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
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      nickname: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      gender: 'male',
      termsAgreed: false,
      privacyAgreed: false,
      usernameError: '',
      nicknameError: '',
      passwordError: '',
    };
  },
  methods: {
    async checkUsername() {
      if (this.username) {
        const response = await axios.get(`http://localhost:3000/users/check-username`, {
          params: { username: this.username },
        });
        this.usernameError = response.data.exists ? 'Username already taken' : '';
      }
    },
    async checkNickname() {
      if (this.nickname) {
        const response = await axios.get(`http://localhost:3000/users/check-nickname`, {
          params: { nickname: this.nickname },
        });
        this.nicknameError = response.data.exists ? 'Nickname already taken' : '';
      }
    },
    register() {
      if (this.password !== this.confirmPassword) {
        this.passwordError = 'Passwords do not match';
      } else {
        this.passwordError = '';
        axios.post('http://localhost:3000/users/register', {
          username: this.username,
          nickname: this.nickname,
          password: this.password,
          birthdate: this.birthdate,
          gender: this.gender,
          termsAgreed: this.termsAgreed,
          privacyAgreed: this.privacyAgreed,
        }).then(() => {
          this.$router.push('/login');
        });
      }
    },
  },
};
</script>

<style scoped>
.register {
  padding: 1rem;
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

span {
  color: red;
  font-size: 0.875rem;
}
</style>
