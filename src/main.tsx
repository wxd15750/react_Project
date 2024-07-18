import React from "react";
import ReactDOM from "react-dom/client";
// 重置样式
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.scss";
import App from "./App";
import store from "./redux/index";
const app = ReactDOM.createRoot(document.getElementById("root")!);
app.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
