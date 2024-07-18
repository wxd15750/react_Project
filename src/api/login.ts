import http from "../utils/http";
interface ReaponseType<T> {
  code: number;
  message: string;
  data: T;
}
interface TokenType {
  token: string;
}
interface UserInfoType {
  routes: string[];
  buttons: string[];
  roles: string[];
  name: string;
  avatar: string;
}
// 获取token
export const reqLogin = (params: any) => {
  return http.post<any, ReaponseType<TokenType>>(
    "/admin/acl/index/login",
    params
  );
};

// 获取用户信息
// /admin/acl/index/info
export const reqUserInfo = () => {
  return http.get<any, ReaponseType<UserInfoType>>("/admin/acl/index/info");
};
// 退出登录
// /admin/acl/index/logout
