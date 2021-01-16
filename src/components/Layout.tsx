import React from "react";
import "_/styles/Layout.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Layout;
