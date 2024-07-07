// 导入
import Login from "../views/login/index.tsx";
import NotFound from "../views/404/index.tsx";
import AuthRoute from "../components/Author/index.tsx";
import LayoutContent from "../layout/index.tsx";
import { RouteItem } from "./type";
import { Home } from "../views/home/index.tsx";
import Role from "../views/sys/role/index.tsx";
import Menus from "../views/sys/menus/index.tsx";
import User from "../views/sys/user/index.tsx";

import { Navigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import lazyLoad from "./lazyRoute.tsx";
import Screen from "../views/screen/index.tsx";

const route: Array<RouteItem> = [
  {
    path: "/login",
    element: <Login></Login>,
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/",
    element: <LayoutContent />,
    meta: {
      title: "首页",
      hidden: true,
    },
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        meta: {
          title: "首页",
          hidden: false,
          icon: <UploadOutlined />,
        },
      },
      {
        path: "/sys",
        // element: <Role></Role>,
        meta: {
          title: "系统管理",
          hidden: false,
          icon: <UploadOutlined />,
        },
        children: [
          {
            path: "/sys/menu",
            element: lazyLoad(Menus),
            meta: {
              title: "菜单管理",
              hidden: false,
              icon: <MenuFoldOutlined />,
            },
          },
          {
            path: "/sys/role",
            element: lazyLoad(Role),
            meta: {
              title: "角色管理",
              hidden: false,
              icon: <UserOutlined />,
            },
          },
          {
            path: "/sys/user",
            element: lazyLoad(User),
            meta: {
              title: "角色管理",
              hidden: false,
              icon: <VideoCameraOutlined />,
            },
          },
        ],
      },
      {
        path: "/screen",
        element: <Screen></Screen>,
        meta: {
          title: "数据大屏",
          hidden: false,
          icon: <MenuUnfoldOutlined />,
        },
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
    meta: {
      title: "404",
      hidden: true,
    },
  },
];
// 设置路由

// let routes = route.filter((item) => item.meta?.hidden == false);

export default route;
