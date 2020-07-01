import React, { Component } from "react";
import "./App.css";
import Colors from "./colors";
import SearchSuggestions from "./SearchSuggestions";

class SearchBar extends Component {
  state = {
    highlightIndex: -1,
  };

  handleChange = (e) => {
    this.props.changeText(e.target.value);
  };

  selectOption = (e) => {
    this.search.value = "";
    this.props.selectOption(e);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.highlightIndex !== -1)
      this.selectOption(
        this.props.searchResult[this.state.highlightIndex].districtcode
      );
  };

  arrowHighlight = (e) => {
    if (this.props.searchResult !== null) {
      if (e.keyCode === 38) {
        if (this.state.highlightIndex !== -1) {
          this.setState({
            highlightIndex: this.state.highlightIndex - 1,
          });
        }
      }

      if (e.keyCode === 40) {
        if (this.state.highlightIndex < this.props.searchResult.length - 1) {
          this.setState({
            highlightIndex: this.state.highlightIndex + 1,
          });
        }
      }
    }
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        <div className="search center">
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="string"
              placeholder="Enter District"
              ref={(input) => (this.search = input)}
              onChange={this.handleChange}
              onKeyDown={(e) => {
                this.arrowHighlight(e);
              }}
              style={{
                width: "50%",
                color: "white",
                padding: "7px",
                backgroundColor: Colors.brandIndigo,
                borderColor: "#000",
                borderWidth: "0.5pt",
                borderTopLeftRadius: "5pt",
                borderBottomRightRadius: "5pt",
                outline: "none",
              }}
            />
          </form>
        </div>
        <SearchSuggestions
          selectOption={this.selectOption}
          searchResult={this.props.searchResult}
          highlightIndex={this.state.highlightIndex}
        />
      </div>
    );
  }
}

export default SearchBar;
