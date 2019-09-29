import React from "react";

export const WeatherCard = ({
  city: {
    name,
    main: { temp, humidity, pressure }
  },
  addToFavorites
}) => {
  return (
    <div className="weather-card">
      <h1>Current weather in {name}:</h1>
      <button className="add-to-favs" onClick={addToFavorites(name)}>
        Add to Favorites
      </button>
      <p>Temperature: {temp}</p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
    </div>
  );
};
