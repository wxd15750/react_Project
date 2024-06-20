import { useState } from "react";
import { Layout, Menu } from "antd";
import Avator from "../avator";
import routes from "../../routes";
const { Sider } = Layout;
interface MenuType {
  key: string;
  label: string;
  icon?: JSX.Element;
  children?: MenuType[];
}
export default function LSilder() {
  const [collapsed, setCollapsed] = useState(false);
  //   菜单列表
  //   function menuData(route: any) {
  //     let menu = route.map((item: any) => {
  //       let obj: MenuType = {
  //         key: item.path,
  //         label: item.meta.title,
  //       };
  //       if (item.children) {
  //         obj.children = menuData(item.children);
  //       }
  //       return obj;
  //     });
  //     return menu;
  //   }

  //   点击菜单时
  const changeMenu = (event: any) => {
    console.log(event);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Avator />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[]}
        onClick={changeMenu}
      />
    </Sider>
  );
}
