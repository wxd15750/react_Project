// 导入
import Login from "../views/login/index.tsx";
import NotFound from "../views/404/index.tsx";
import AuthRoute from "../components/Author/index.tsx";
import LayoutContent from "../layout/index.tsx";
import { RouteItem } from "./type";
import { Home } from "../views/home/index.tsx";
import Role from "../views/sys/role/index.tsx";
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
        },
      },
      {
        path: "/sys",
        element: <Home></Home>,
        meta: {
          title: "系统管理",
          hidden: false,
        },
        children: [
          {
            path: "role",
            element: <Role></Role>,
            meta: {
              title: "角色管理",
              hidden: false,
            },
          },
        ],
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
