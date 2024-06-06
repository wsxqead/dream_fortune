import fetch from "./fetch";

export default {
  checkLoginId(loginId) {
    return fetch.get(`/users/check-loginId`, { params: { loginId } });
  },

  checkNickname(nickname) {
    return fetch.get(`/users/check-nickname`, { params: { nickname } });
  },

  register(userData) {
    return fetch.post(`/users`, userData);
  },
};

export async function fetchProfile() {
  const resp = await fetch.get(`/users/profile`).catch((error) => {
    console.log(error);
  });
  return resp?.data;
}
