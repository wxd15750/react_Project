import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/storage";
import { reqUserInfo } from "../../api/login";

// 创建纯函数
const userInfoStore = createSlice({
  name: "userInfo", // 名称
  // 初始数据
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
    // 获取用户信息
    getUserInfo: (state, action) => {
      // 数据加
      state.userInfo = action.payload;
    },
  },
});
// 异步数据的获取
export const getUser = () => {
  return async (dispatch: any) => {
    const res = await reqUserInfo();
    dispatch(getUserInfo(res.data));
  };
};

export let { getUserInfo } = userInfoStore.actions; // 暴露行为给组件调用

export default userInfoStore.reducer;
