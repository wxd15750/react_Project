import React, { useEffect } from "react";
import * as echarts from "echarts";
import merge from "lodash/merge";
export default function ComEchart(optiondata: any) {
  // 基于准备好的dom，初始化echarts实例
  // console.log(optiondata);

  let { option } = optiondata;
  let comoption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
  };

  useEffect(() => {
    let myChart = echarts.init(document.getElementById("main"));

    myChart.setOption(merge(option, comoption));
    console.log(merge(option, comoption));

    // 注意：这里需要返回一个清理函数，以确保在组件卸载时销毁ECharts实例
    return () => {
      myChart.dispose();
    };
  }, []);
  // 监听数据的变化，重新渲染视图
  useEffect(() => {
    // myChart.setOption(merge(comoption, options));
  }, [option]);
  return <div id="main" style={{ width: "100%", height: "100%" }}></div>;
}
