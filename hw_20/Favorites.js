import React from "react";

export const Favorites = ({ cities, setCurrentCity }) => {
  return (
    <div>
      <h2>Favorite places</h2>

      {!!cities.length ? (
        <ul>
          {cities.map(city => (
            <li key={city} onClick={setCurrentCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      ) : (
        "No favs yet"
      )}
    </div>
  );
};
