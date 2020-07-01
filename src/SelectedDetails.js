import React from "react";
import Colors from "./colors";

const SelectedDetails = ({ district }) => {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "14px",
        fontFamily: "Helvetica Neue",
        wordWrap: "break-word",
      }}
    >
      <table
        width="100%"
        style={{
          tableLayout: "fixed",
        }}
      >
        <tbody>
          <tr>
            <td width="40%" align="right">
              <div
                style={{
                  color: Colors.brandOrange,
                }}
              >
                Zone :
              </div>
            </td>
            <td
              width="60%"
              align="center"
              style={{
                padding: "10px",
              }}
            >
              <div>{district.zone}</div>
            </td>
          </tr>

          <tr>
            <td width="40%" align="right">
              <div
                style={{
                  color: Colors.brandOrange,
                }}
              >
                Active :
              </div>
            </td>
            <td
              width="60%"
              align="center"
              style={{
                padding: "10px",
              }}
            >
              <div>{district.active}</div>
            </td>
          </tr>

          <tr>
            <td width="40%" align="right">
              <div
                style={{
                  color: Colors.brandOrange,
                }}
              >
                Confirmed :
              </div>
            </td>
            <td
              width="60%"
              align="center"
              style={{
                padding: "10px",
              }}
            >
              <div>{district.confirmed}</div>
            </td>
          </tr>

          <tr>
            <td width="40%" align="right">
              <div
                style={{
                  color: Colors.brandOrange,
                }}
              >
                Recovered :
              </div>
            </td>
            <td
              width="60%"
              align="center"
              style={{
                padding: "10px",
              }}
            >
              <div>{district.recovered}</div>
            </td>
          </tr>

          <tr>
            <td width="40%" align="right">
              <div
                style={{
                  color: Colors.brandOrange,
                }}
              >
                Deceased :
              </div>
            </td>
            <td
              width="60%"
              align="center"
              style={{
                padding: "10px",
              }}
            >
              <div>{district.deceased}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          padding: "2%",
          color: Colors.brandLime,
          borderBottom: "0.5px solid #FFF",
        }}
      >
        Delta Today
      </div>
      <table
        width="100%"
        style={{
          tableLayout: "fixed",
          paddingTop: "2%",
        }}
      >
        <tbody>
          <tr width="100%">
            <td
              align="center"
              width="33%"
              style={{
                width: "33%",
                color: Colors.zoneRed,
              }}
            >
              Confirmed
            </td>
            <td
              align="center"
              width="33%"
              style={{
                width: "33%",
                color: Colors.zoneGreen,
              }}
            >
              Recovered
            </td>
            <td
              align="center"
              width="33%"
              style={{
                width: "33%",
                color: Colors.brandPersianBlue,
              }}
            >
              Deceased
            </td>
          </tr>
          <tr width="100%">
            <td
              align="center"
              width="33%"
              style={{
                color: Colors.zoneRed,
              }}
            >
              {district.deltaConfirmed}
            </td>
            <td
              align="center"
              width="33%"
              style={{
                color: Colors.zoneGreen,
              }}
            >
              {district.deltaRecovered}
            </td>
            <td
              align="center"
              width="33%"
              style={{
                color: Colors.brandPersianBlue,
              }}
            >
              {district.deltaDeceased}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedDetails;
