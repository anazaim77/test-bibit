import React from "react";

const CenterBox = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 34,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CenterBox;
