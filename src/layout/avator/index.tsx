import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import avatar from "../../assets/images/avatar.png";

export default function Avator() {
  const [collapsed, setCollapsed] = useState(false);

  //   定于消息
  PubSub.subscribe("hahah", (message, data) => {
    setCollapsed(data);
  });
  return (
    <div className="demo-logo-vertical">
      <img
        src={avatar}
        alt=""
        width={50}
        style={{ marginRight: "10px", borderRadius: "50%" }}
      />
      {!collapsed && (
        <span style={{ fontWeight: "700", fontSize: "20px" }}>vue_Admin</span>
      )}
    </div>
  );
}
