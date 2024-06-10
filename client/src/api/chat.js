import { asyncErrorBoundary } from "@/utils/asyncErrorBoundary ";
import fetch from "./fetch";

// export const sendChat = asyncErrorBoundary(
//   async ({ prompt, url }) => await fetch.post("/chat", { prompt, url })
// );

export const sendChat = asyncErrorBoundary(
  async ({ prompt, url }) => await fetch.post("/chat", { prompt, url })
);
