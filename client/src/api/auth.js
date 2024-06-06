import { asyncErrorBoundary } from "@/utils/asyncErrorBoundary ";
import fetch from "./fetch";

export default {
  loginUser(userData) {
    return fetch.get(`/auth/login`, userData);
  },
};

export const signIn = asyncErrorBoundary(
  async ({ loginId, password }) =>
    await fetch.post("/auth/sign-in", { loginId, password })
);

export const idDupCheck = asyncErrorBoundary(
  async ({ loginId }) => await fetch.post("/auth/id-check", { loginId })
);

export const nickNameDupCheck = asyncErrorBoundary(
  async ({ nickname }) => await fetch.post("/auth/nickname-check", { nickname })
);
