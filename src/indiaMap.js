import React, { Component, createRef, useRef } from "react";
import { geoMercator, geoPath } from "d3-geo";

import "./map.css";
import Colors from "./colors";

//TODO:Optimize and fix in project
const projection = geoMercator()
  .scale(700)
  .center([14, 2])
  .translate([-800 / 2, 1000 / 2]);

class WorldMap extends Component {
  setColor = (e) => {
    var color = {
      Green: Colors.zoneGreen,
      Orange: Colors.zoneOrange,
      Red: Colors.zoneRed,
      Gray: Colors.brandPersianBlue,
    };
    return color[e];
  };

  
  state = {
    tooltipX: 0,
    tooltipY: 0,
    selectedDistrict: null,
  };




  handleDistrictClick = (e, Index) => {
    var object = this.props.districtMap[Index];
    var selectedDistrict = this.props.data.filter(
      (dis) => object.properties.NAME_2 === dis.district
    );
   
    if (selectedDistrict.length) {
      this.props.selectFunction(selectedDistrict[0]);
    }
  };


  handlemouseenter = (e, Index) => {
    var x = e.pageX + 10 + "px";
    var y = e.pageY + 5 + "px";
    this.tooltip.innerHTML = "text";
    this.tooltip.style.display = "block";
    this.tooltip.style.left = x;
    this.tooltip.style.top = y;
    var object = this.props.districtMap[Index];
    this.tooltip.textContent = object.properties.NAME_2;
  };

  handleMouseExit = (e) => {
    this.tooltip.style.display = "none";
  };

  render() {
    return (
      <div className="svgContainer">
        <div
          id="tooltip"
          ref={(el) => {
            this.tooltip = el;
          }}
          style={{
            position: "absolute",
            display: "none",
            backgroundColor: Colors.brandMidnightBlue,
            color: "#FFF",
            padding: "5px",
            color: Colors.brandLime,
            fontFamily: "Josefin Sans",
          }}
        ></div>
        <svg viewBox="0 0 800 450">
          <g className="district">
            {this.props.districtMap.map((d, i) => (
              <path
                key={`path-${i}`}
                d={geoPath().projection(projection)(d)}
                className="country"
                fill={this.setColor(d.properties.zone)}
                fillOpacity={0.6}
                stroke={
                  (this.props.selectedDistrict !== null) ?
                    (this.props.selectedDistrict !== undefined) ?
                      (this.props.selectedDistrict.district === d.properties.NAME_2) ? Colors.brandIndigo : '#000'
                      : '#000'
                    : '#000'
                }
                strokeWidth={
                  (this.props.selectedDistrict !== null) ?
                    (this.props.selectedDistrict !== undefined) ?
                      (this.props.selectedDistrict.district === d.properties.NAME_2) ? 3 : 0.5
                      : 0.5
                    : 0.5
                }
                onClick={(e) => this.handleDistrictClick(e, i)}
                onMouseMove={(e) => this.handlemouseenter(e, i)}
                onMouseOut={(e) => this.handleMouseExit(e)}
              ></path>
            ))}
          </g>

          <g className="states">
            {this.props.stateMap.map((d, i) => (
              <path
                key={`path-${i}`}
                d={geoPath().projection(projection)(d)}
                className="country"
                fill={"#FFFFFF"}
                fillOpacity={0.2}
                stroke="#000000"
                strokeWidth={1}
                pointerEvents="none"
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default WorldMap;
