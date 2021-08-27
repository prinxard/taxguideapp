import React from "react";
import HeaderComponent from "./HeaderComponent";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};
