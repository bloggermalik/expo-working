import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "https://reminder-app-jade-one.vercel.app",
  plugins: [
    expoClient({
      scheme: "test",
      storagePrefix: "test",
      storage: SecureStore,
    }),
  ],
});