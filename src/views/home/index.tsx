import React, { useState } from "react";

// 导入样式文件
import homeStyle from "./hom.module.scss";
// /assets/images/welcome01.png
import welcome from "../../assets/images/welcome01.png";
export const Home: React.FC = () => {
  return (
    <>
      <div className={homeStyle.home}>
        <img src={welcome} alt="welcome" />
      </div>
    </>
  );
};
