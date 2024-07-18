// 导入样式文件
import homeStyle from "./hom.module.scss";
import welcome from "../../assets/images/welcome01.png";

export default function Home() {
  return (
    <>
      <div className={homeStyle.home}>
        <img src={welcome} alt="welcome" />
      </div>
    </>
  );
}
