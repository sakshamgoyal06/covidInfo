import React, { Component } from "react";
import "./App.css";
import Colors from "./colors";
import Searchitem from "./SearchItem";

class SearchSuggestions extends Component {
  selectOption = (e) => {
    this.props.selectOption(e);
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          zIndex: "300",
        }}
      >
        {this.props.searchResult === null ? null : (
          <div
            className="suggestionList"
            style={{
              position: "absolute",
              left: "25%",
              margin: "auto",
              maxHeight: "200px",
              width: "49%",
              overflowY: "scroll",
              backgroundColor: Colors.brandIndigo,
              boxShadow: "-2px 2px #888888",
              padding: "5px",
              scrollBehavior: "smooth",
            }}
          >
            <div className="result center card">
              {this.props.searchResult.map((result, index) => {
                if (result != null) {
                  return (
                    <div
                      onClick={() => {
                        this.selectOption(result.districtcode);
                      }}
                      key={result.districtcode}
                      style={{
                        backgroundColor:
                          index === this.props.highlightIndex
                            ? Colors.brandMidnightBlue
                            : Colors.brandIndigo,
                        borderBottom: "1px solid #666666",
                        paddingRight: "20%",
                      }}
                    >
                      <Searchitem result={result} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SearchSuggestions;
