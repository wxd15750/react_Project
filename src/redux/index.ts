// 开始准备创建仓库
import { configureStore } from "@reduxjs/toolkit";
// 引入纯函数
import userInfo from "./reducers/userInfo";
// 返回值就是仓库
const store = configureStore({
  // 每个组件的纯函数
  reducer: {
    userInfo,
  },
});

export default store;
