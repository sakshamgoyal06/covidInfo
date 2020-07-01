import React from "react";
import Colors from "./colors";
import SearchItem from "./SearchItem";
import SelectedDetails from "./SelectedDetails";

const SelectedDistrict = (props) => {
  const district = props.district;


  return district === null ? null : (
    <div
      style={{
        margin: "5%",
        marginRight: "15%",
        padding: "3%",
        fontFamily: "Helvetica Neue",
        color: "#FFF",
        fontSize: "24px",
        backgroundColor: Colors.brandGreen,
      }}
    >
      <div align="right" valign="top">
        <button
          onClick={() => {
            props.selectFunction(null);
          }}
          style={{
            width: "20px",
            color: Colors.brandLime,
            height: "20px",
            textAlign: "center",
            border: "none",
            display: "inline-block",
            outline: "none",
            fontSize: "10px",
            backgroundColor: Colors.brandIndigo,
          }}
        >
          <div>X </div>
        </button>
      </div>
      <SearchItem result={district} />
      <SelectedDetails
        district={district}
        style={{
          paddingTop: "10px",
        }}
      ></SelectedDetails>
    </div>
  );
};

export default SelectedDistrict;
