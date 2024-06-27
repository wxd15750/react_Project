import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Avator from "../avator";
import route from "../../routes";
import { RouteItem } from "../../routes/type";
import { useLocation, useNavigate } from "react-router-dom";
import PubSub from "pubsub-js";

const { Sider } = Layout;
interface MenuType {
  key: string;
  label: string;
  icon?: JSX.Element;
  children?: MenuType[];
}
export default function LSilder() {
  const [collapsed, setCollapsed] = useState(false);
  //   路由的跳转
  let navigate = useNavigate();
  //   菜单数据
  let routes = route.filter((item) => item.path == "/" && item.children);

  function menuList(routers: RouteItem[]) {
    let menu = routers.map((item) => {
      let obj: MenuType = {
        key: item.path,
        label: item.meta?.title as string,
        icon: item.meta?.icon,
      };
      if (item.children) {
        obj.children = menuList(item.children);
      }
      return obj;
    });
    return menu;
  }
  //   点击菜单时
  //   获取地址栏参数
  const changeMenu = (event: any) => {
    navigate(event.key);
  };
  let currentRoute = useLocation();
  //   默认选中的向
  let firstRoute: string = "";
  let [openkey, setOpenkey] = useState([firstRoute]);

  let routeList = menuList(routes[0].children as RouteItem[]);
  function findKey(obj: { key: string }) {
    return obj.key == currentRoute.pathname;
  }
  for (let i = 0; i < routeList.length; i++) {
    if (routeList[i]!["children"] && routeList[i]!["children"].find(findKey)) {
      firstRoute = routeList[i].key;
      break;
    }
  }
  useEffect(() => {
    setOpenkey([firstRoute]);
  }, []);
  //   定于消息
  PubSub.subscribe("hahah", (message, data) => {
    // console.log(data);
    setCollapsed(data);
    //   console.log(data);
  });
  //   当前展开项
  //   自动展开和回收
  const handlerOpenChange = (keys: string[]) => {
    setOpenkey([keys[keys.length - 1]]);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Avator />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentRoute.pathname]}
        items={menuList(routes[0].children as RouteItem[])}
        onClick={changeMenu}
        onOpenChange={handlerOpenChange}
        openKeys={openkey}
      />
    </Sider>
  );
}
