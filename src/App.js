import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import { feature } from "topojson-client";
import Header from "./Header";
import "./App.css";
import WorldMap from "./indiaMap";
import SelectedDistrict from "./selectedDistrict";
import Footer from "./Footer";
class App extends Component {
  state = {
    data: [],
    districtMap: [],
    stateMap: [],
    isSelected: false,
    selectedDistrict: null,
  };

  data = [];
  districtMap = [];
  stateMap = [];
  zoneHash = new Map();
  nameHash = new Map();
  componentWillMount() {
    axios.get("https://api.covid19india.org/zones.json").then((res) => {
      res.data.zones.forEach((element) => {
        this.data.push(element);
        this.nameHash.set(element.district, this.data.indexOf(element));
      });

      axios
        .get(
          "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json"
        )
        .then((res) => {
          this.districtMap = feature(
            res.data,
            res.data.objects.IND_adm2
          ).features;

          this.data.forEach((element) => {
            this.zoneHash.set(element.district, element.zone);
          });

          this.districtMap.forEach((element) => {
            if (this.zoneHash.has(element.properties.NAME_2)) {
              element.properties.zone = this.zoneHash.get(
                element.properties.NAME_2
              );
            } else {
              element.properties.zone = "Gray";
            }
          });

          this.setState({
            data: [...this.data],
            districtMap: [...this.districtMap],
          });
        });
    });

    axios
      .get("https://api.covid19india.org/v2/state_district_wise.json")
      .then((res) => {
        res.data.forEach((el) => {
          el.districtData.forEach((district) => {
            var index = this.nameHash.get(district.district);
            var obj = this.data[index];
            if (obj !== undefined) {
              obj.active = district.active;
              obj.confirmed = district.confirmed;
              obj.deceased = district.deceased;
              obj.recovered = district.recovered;
              obj.deltaConfirmed = district.delta.confirmed;
              obj.deltaRecovered = district.delta.recovered;
              obj.deltaDeceased = district.delta.deceased;
              this.data[index] = obj;
            }
          });
        });
        this.setState({
          data: [...this.data],
        });
      });

    axios
      .get(
        "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"
      )
      .then((res) => {
        this.stateMap = feature(res.data, res.data.objects.IND_adm1).features;
        this.setState({
          stateMap: [...this.stateMap],
        });
      });
  }

  selectFunction = (selectedDistrict) => {
    if (selectedDistrict !== null) {
      this.setState({
        isSelected: true,
        selectedDistrict: selectedDistrict,
      });
    } else {
      this.setState({
        isSelected: false,
        selectedDistrict: null,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search data={this.data} selectFunction={this.selectFunction} />
        <div
          style={{
            minHeight: "80vh",
            paddingTop: "5vh",
          }}
        >
          <table width="100%">
            <tbody>
              <tr align="center">
                <td width={this.state.isSelected === false ? "100%" : "60%"}>
                  <WorldMap
                    data={this.state.data}
                    districtMap={this.state.districtMap}
                    stateMap={this.state.stateMap}
                    selectFunction={this.selectFunction}
                    selectedDistrict={this.state.selectedDistrict}
                  />
                </td>
                {this.state.isSelected === false ? null : (
                  <td width="40%">
                    <SelectedDistrict
                      district={this.state.selectedDistrict}
                      selectFunction={this.selectFunction}
                    />
                  </td>
                )}
              </tr>

            </tbody>
          </table>
        </div>
         <iframe
                title="myframe"
                style={{ width: "120px", height: "240px", marginWidth:"0", marginHeight:"0",
                scrolling:"no",
                frameBorder:"0",}}
                src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=sakshamgoyal0-21&marketplace=amazon&region=IN&placement=B0834DLJG5&asins=B0834DLJG5&linkId=0c4011f16550b6ac0c45a29849b6ac75&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF"
              ></iframe>
        <Footer />
      </div>
    );
  }
}

export default App;
