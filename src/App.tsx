import React from "react";
import { useRoutes } from "react-router-dom";
import route from "./routes/index.tsx";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
export default function App() {
  return <ConfigProvider locale={zhCN}>{useRoutes(route)}</ConfigProvider>;
}
