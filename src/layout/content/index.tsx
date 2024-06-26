import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
// 导入样式文件
const { Content } = Layout;
export default function MainContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </Content>
  );
}
