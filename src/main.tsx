import React from "react";
import ReactDOM from "react-dom/client";
// 重置样式
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
const app = ReactDOM.createRoot(document.getElementById("root")!);
app.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>
);
