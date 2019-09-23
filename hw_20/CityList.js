import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CityList extends Component {
  renderCities = () => {
    const { searchString, filters, loadedCities } = this.props;
    let filteredCities = [];

    if (loadedCities && filters) {
      filteredCities = loadedCities.filter(city =>
        [...filters].includes(city.sys.country)
      );
    }

    if (searchString) {
      filteredCities = !!filteredCities.length ? filteredCities : loadedCities;
      filteredCities = filteredCities.filter(
        city => city.name.toLowerCase().indexOf(searchString) >= 0
      );
    }
    return (
      !!filteredCities.length &&
      filteredCities.map(city => {
        const { name } = city;
        return (
          <div key={name}>
            <Link to={`/${name}`}>{name}</Link>
          </div>
        );
      })
    );
  };

  render() {
    return <ul>{this.renderCities()}</ul>;
  }
}
