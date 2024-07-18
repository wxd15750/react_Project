// 导入
import React, { lazy } from "react";
import Login from "../views/login/index.tsx";
import NotFound from "../views/404/index.tsx";
import LayoutContent from "../layout/index.tsx";
import { RouteItem } from "./type";

import { Navigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import lazyLoad from "./lazyRoute.tsx";
// 路由组件
const Home = () => import("../views/home/index.tsx");
const Role = () => import("../views/sys/role/index.tsx");
const Menus = () => import("../views/sys/menus/index.tsx");
const User = () => import("../views/sys/user/index.tsx");
const Screen = () => import("../views/screen/index.tsx");

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
        element: lazyLoad(React.lazy(Home)),
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
            element: lazyLoad(React.lazy(Menus)),
            meta: {
              title: "菜单管理",
              hidden: false,
              icon: <MenuFoldOutlined />,
            },
          },
          {
            path: "/sys/role",
            element: lazyLoad(React.lazy(Role)),
            meta: {
              title: "角色管理",
              hidden: false,
              icon: <UserOutlined />,
            },
          },
          {
            path: "/sys/user",
            element: lazyLoad(React.lazy(User)),
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
        element: <Navigate to="/screen/dataScreen"></Navigate>,
        meta: {
          title: "数据大屏",
          hidden: false,
          icon: <MenuUnfoldOutlined />,
        },
      },
    ],
  },
  {
    path: "/screen/dataScreen",
    element: lazyLoad(React.lazy(Screen)),
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
