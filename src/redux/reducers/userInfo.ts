// 通过@reduxjs/toolkit创建纯函数
import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/storage";

// 创建纯函数
const userInfo = createSlice({
  name: "userInfo", // 名称
  initialState: {
    // 初始数据 对象
    token: "" || getToken(),
    userInfo: {
      buttons: [],
      routes: [],
      roles: [],
      name: "",
      avatar: "",
    },
  },
  reducers: {
    // 重新处理数据
    getUserInfo: (state, action) => {
      // 数据加
      console.log(state, action);
    },
    Reduce: (state, action) => {},
  },
});

export const { getUserInfo, Reduce } = userInfo.actions; // 暴露行为给组件调用
export default userInfo.reducer; // 暴露reduce纯函数给仓库store
