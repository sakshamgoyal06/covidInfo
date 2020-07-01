import React from "react";
import "./App.css";
import Colors from "./colors";

const Searchitem = ({result}) => { 
    return (
      <table width="100%" align="center" style={{
        tableLayout:"fixed",
      }}>
        <tbody>
          <tr align="center" style={{
            padding:"10px",
          }}>
            <td width="40%" align="center" style={{
            }}>
              <svg width="10px" height="10px" style={{
                position: "relative",
                top: "50%",
                zIndex:"10",
                transform: "translateY(-25%)",
              }
              }>
                <rect
                  width="10px"
                  height="10px"
                  style={{
                    fill:
                      result.zone === "Green"
                        ? Colors.zoneGreen
                        : result.zone === "Orange"
                        ? Colors.zoneOrange
                        : Colors.zoneRed,
                  }}
                />
              </svg>
            </td>
            <td width="60%" align="center">
              <div
                style={{
                  color: Colors.brandLime,
                  fontSize: "15px",
                  fontFamily: "Josefin Sans",
                  position: "relative",
                  top:"50%"
                }}
              >
                {result.district}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
}

export default Searchitem;