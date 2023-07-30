import { connector } from "../connector/connector";

export async function apiSignup(username: string, password: string) {
  await connector(`/auth-service/auth/sign-up`, "POST", {
    username,
    password,
  });
  return apiSignIn(username, password);
}

export async function apiSignIn(username: string, password: string) {
  return signIn("credentials", {
    redirect: true,
    username: username,
    password: password,
    callbackUrl: "/",
  });
}
