import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
    </>
  );
};
export default Layout;
