import React from "react";

function Layout({ children, additionalClass }) {
  return (
    <div className={`max-w-7xl w-full mx-auto ${additionalClass}`}>
      {children}
    </div>
  );
}

export default Layout;
