// // 开始准备创建仓库
// 通过@reduxjs/toolkit创建纯函数
import { configureStore } from "@reduxjs/toolkit";
// 导入切片
import userInfoStore, { getUser } from "./reducers/userInfo";

export const store = configureStore({
  reducer: {
    userInfo: userInfoStore,
  },
});
