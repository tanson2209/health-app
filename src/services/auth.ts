import { IAuth, IRefreshToken } from "@/types/auth";
import { axiosNoAuthInstance } from "@/utils/axios";

export function login(email: string, password: string) {
  return axiosNoAuthInstance.post<IAuth>("/auth/login", { email, password });
}

export function getNonce(address: string) {
  return axiosNoAuthInstance.get("/auth/get-nonce/" + address);
}

export function refreshToken(refreshToken: string) {
  return axiosNoAuthInstance.post<IRefreshToken>("/auth/refresh-tokens", {
    refreshToken,
  });
}
export function logout(refreshToken: string) {
  return axiosNoAuthInstance.post("/auth/logout", { refreshToken });
}

export interface ISignupParam {
  company_size: string;
  full_name: string;
  phone_number: string;
  functional_role_id: number;
  email: string;
  bio: string;
  password: string;
}

export function signUp(param: ISignupParam) {
  return axiosNoAuthInstance.post<IAuth>("/users/register", param);
}

export function createAccount(param: ISignupParam, access_code: string) {
  return axiosNoAuthInstance.post<IAuth>(
    `/auth/sign-up?access_code=${access_code}`,
    param
  );
}
