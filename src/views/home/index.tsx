import React, { useEffect, useState } from "react";

// 导入样式文件
import homeStyle from "./hom.module.scss";
// /assets/images/welcome01.png
import welcome from "../../assets/images/welcome01.png";
import http from "../../utils/http";

export default function Home() {
  let [img, setImg] = useState("");
  useEffect(() => {
    async function main() {
      const { imgurl } = await http.get("/api/rand.avatar?sort=男&format=json");
      setImg(imgurl);
    }
    main();
  }, []);
  return (
    <>
      <div className={homeStyle.home}>
        <img src={welcome} alt="welcome" />
      </div>
    </>
  );
}
