// import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/storage";
import { ReactNode } from "react";
export default function AuthRoute({ children }: { children: ReactNode }) {
  const token = getToken();

  if (token) {
    return <>{children}</>;
  } else {
    <Navigate to={"/login"} replace></Navigate>;
  }
}
