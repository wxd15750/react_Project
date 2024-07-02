import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import PubSub from "pubsub-js";
// 导入样式文件
const { Header } = Layout;
export default function NavHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //   获取地址栏的路由
  //   菜单栏的状态
  const handlerClick = () => {
    // console.log(123);
    PubSub.publish("hahah", !collapsed);
    setCollapsed(!collapsed);
  };
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handlerClick}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
      </div>
    </Header>
  );
}
