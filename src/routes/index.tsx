// 导入
import { Home } from "../views/home/index.tsx";
import Login from "../views/login/index.tsx";
const route = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
];

export default route;
