import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
// import LayoutContent from "./layout/index.tsx";
import { useRoutes } from "react-router-dom";
import route from "./routes";
export default function App() {
  let outlet = useRoutes(route);
  return <ConfigProvider locale={zhCN}>{outlet}</ConfigProvider>;
}
