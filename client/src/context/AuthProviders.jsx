import React, { createContext, useState } from "react";

const RouteAuth = createContext(null);

export function AuthProvider({ children }) {

  const [isAuth, setIsAuth] = useState("");

  return <RouteAuth value={{ name, setName }}>{children}</RouteAuth>;

}

export { RouteAuth };