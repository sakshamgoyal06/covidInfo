import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

class search extends Component {
  state = {
    searchText: "",
    searchResult: null,
  };

  handleChange = (e) => {
    var searchText = e.toLowerCase();
    var resSearch = this.props.data.map((district) => {
      var str = district.district;
      str = str.toLowerCase();
      if (str.includes(searchText)) {
        return district;
      } else {
        return null;
      }
    });
    resSearch = [
      ...resSearch.filter((res) => {
        return res !== null;
      }),
    ];
    if (searchText === "" || resSearch.length === 0) {
      this.setState({
        searchText,
        searchResult: null,
      });
    } else {
      this.setState({
        searchText,
        searchResult: resSearch,
      });
    }
  };

  selectOption = (e) => {
    var selectedDistrict = this.props.data.filter(
      (district) => district.districtcode === e
    );

    this.props.selectFunction(selectedDistrict[0]);

    this.setState({
      searchResult: null,
      searchText: "",
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          changeText={this.handleChange}
          selectOption={this.selectOption}
          searchResult={this.state.searchResult}
        />
      </div>
    );
  }
}

export default search;
