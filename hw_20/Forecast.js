import React from "react";

export const Forecast = ({ match }) => {
  const appData = JSON.parse(localStorage.getItem("appData"));
  const loadedCities = appData.weather;
  const {
    forecast: { temp }
  } = loadedCities.find(city => city.name === match.params.city);

  return (
    <div className="weather-forecast">
      <h1>Weather forecast in {match.params.city}:</h1>
      {temp && (
        <ul>
          {Object.entries(temp).map(([day, t]) => (
            <li key={day}>
              Day {day} : {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
