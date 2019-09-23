import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { weather, countries } from "./fixtures";

import { WeatherCard } from "./WeatherCard";
import { Favorites } from "./Favorites";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { CityList } from "./CityList";
import { Forecast } from "./Forecast";
import "./styles.css";

export class App extends Component {
  state = {
    currentCity: weather[0],
    favorites: new Set(),
    filters: new Set(),
    searchString: ""
  };

  componentDidMount() {
    const appData = JSON.parse(localStorage.getItem("appData"));
    this.loadedCities = appData.weather;
  }

  setCurrentCity = cityName => () => {
    const selectedCity = weather.find(
      weatherLocation => weatherLocation.name === cityName
    );
    this.setState({ currentCity: selectedCity });
  };

  addToFavorites = cityName => () => {
    this.setState({
      favorites: this.state.favorites.add(cityName)
    });
  };

  removeFilter = filterString => {
    console.log("removed from filters", filterString);
    this.state.filters.delete(filterString);
    this.setState({ filters: this.state.filters });
  };

  addToFilters = filterString => {
    console.log("added to filter", filterString);
    this.setState({ filters: this.state.filters.add(filterString) });
  };

  applySearchString = searchString => {
    this.setState({ searchString });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Select location:</h1>
          <Filter
            labels={[...countries]}
            addToFilters={this.addToFilters}
            applySearchString={this.applySearchString}
            removeFilter={this.removeFilter}
          />
          <Search setSearchValue={this.applySearchString} />

          <CityList
            setCurrentCity={this.setCurrentCity}
            filters={this.state.filters}
            searchString={this.state.searchString}
            loadedCities={this.loadedCities}
          />

          <WeatherCard
            city={this.state.currentCity}
            addToFavorites={this.addToFavorites}
          />

          <Favorites
            cities={[...this.state.favorites]}
            setCurrentCity={this.setCurrentCity}
          />
        </div>

        <Route path={`/:city`} component={Forecast} />
      </Router>
    );
  }
}
