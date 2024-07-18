import React from "react";
import LeftTop from "./leftTop";
import ScreenStyle from "./screen.module.scss";
export default function Screen() {
  let option2 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  return (
    <div className={ScreenStyle.contain}>
      {/* 头部 */}
      <div className={ScreenStyle.header}>数据大屏</div>
      <div className={ScreenStyle.main}>
        {/* 左侧 */}
        <div className={ScreenStyle.left}>
          <div className={ScreenStyle.left_Item}>
            <LeftTop></LeftTop>
          </div>
          <div className={ScreenStyle.left_Item}>222</div>
          <div className={ScreenStyle.left_Item}>333</div>
          {/* <div className={ScreenStyle.left_Item}>11</div>
          <div className={ScreenStyle.left_Item}>22</div>
          <div className={ScreenStyle.left_Item}>33</div> */}
        </div>
        {/* 中间 */}
        <div className={ScreenStyle.centers}>2</div>

        {/* 右侧 */}
        <div className={ScreenStyle.right}>
          <div className={ScreenStyle.right_Item}>4</div>
          <div className={ScreenStyle.right_Item}>5</div>
          <div className={ScreenStyle.right_Item}>6</div>
          {/* <div className={ScreenStyle.right_Item}>11</div>
          <div className={ScreenStyle.right_Item}>22</div>
          <div className={ScreenStyle.right_Item}>33</div> */}
        </div>
      </div>
      {/* <ComEchart options={option}></ComEchart> */}
    </div>
  );
}
