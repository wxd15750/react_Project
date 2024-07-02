import React from "react";
import { Layout } from "antd";
import home from "./hom.module.scss";
import LSilder from "./sider/index";
import NavHeader from "./header";
import MainContent from "./content";
export default function LayoutContent() {
  return (
    <Layout className={home.layout}>
      {/* 左侧 */}
      <LSilder />
      {/* 右侧区域 */}
      <Layout>
        {/*导航栏 */}

        <NavHeader />
        {/* 内容展示区 */}
        <MainContent />
      </Layout>
    </Layout>
  );
}
