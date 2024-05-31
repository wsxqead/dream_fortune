import axios from 'axios';

export default {
  checkLoginId(loginId) {
    return axios.get(`${process.env.API_URL}/users/check-loginId`, { params: { loginId } });
  },

  checkNickname(nickname) {
    return axios.get(`${process.env.API_URL}/users/check-nickname`, { params: { nickname } });
  },

  register(userData) {
    return axios.post(`${process.env.API_URL}/users/register`, userData);
  },
};