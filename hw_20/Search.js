import React, { Component } from "react";

export class Search extends Component {
  state = {
    value: "",
    lastValue: ""
  };

  handleSubmit = ev => {
    this.setState({ value: "", lastValue: this.state.value });
    ev.preventDefault();
  };

  handleChange = ev => {
    this.setState({ value: ev.target.value });
    this.props.setSearchValue(ev.target.value.toLowerCase());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          City:
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.state.value}
            />
          </label>
        </form>
        {this.state.lastValue && (
          <div className="search-value">
            previous search : {this.state.lastValue}
          </div>
        )}
      </div>
    );
  }
}
