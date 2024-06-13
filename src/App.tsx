import React from "react";
import { useRoutes } from "react-router-dom";
import route from "./routes/index.tsx";

export default function App() {
  return <>{useRoutes(route)}</>;
}
