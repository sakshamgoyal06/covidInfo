import React from "react";
import Colors from "./colors";

const Header = () => {
  return (
    <div
      align="center"
      style={{
        minHeight: "10vh",
        backgroundColor: Colors.brandIndigo,
        width: "100%",
        align: "center",
      }}
    >
      <div
        style={{
          padding: "15px 0px 15px 0px",
          marginBottom: "2vh",
          fontSize: "35px",
          fontFamily: "Helvetica Neue",
          fontWeight: "lighter",
          color: Colors.brandLime,
        }}
      >
        Covid Info Project
      </div>
    </div>
  );
};
export default Header;
