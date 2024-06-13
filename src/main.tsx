import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// 重置样式
import "./styles/index.scss";
import { HashRouter } from "react-router-dom";
const app = ReactDOM.createRoot(document.getElementById("root")!);
app.render(
  <React.Fragment>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Fragment>
);
