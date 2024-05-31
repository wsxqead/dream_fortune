import axios from 'axios';

export default {
  loginUser(userData) {
    return axios.get(`${process.env.API_URL}/auth/login`, userData);
  }
}