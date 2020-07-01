import React from "react";
import Colors from "./colors";


const Footer = () => {
    return (
        <div align="center"
            style={{
                backgroundColor: Colors.brandIndigo,
                width: "100%",
                align: "center"
            }}
        >
            <div style={{
                padding: "15px",
                marginTop: "10px",
                fontSize: "14px",
                fontFamily: "Helvetica Neue",
                fontWeight: "lighter",
                textAlign: "right",
                color: Colors.brandLime,
            }}
            >
                Created by Saksham Goyal
        </div>
        </div>
    );

}
export default Footer;