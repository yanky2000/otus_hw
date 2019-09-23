import React, { useState } from "react";

export const Filter = ({ labels, ...rest }) => {
  return (
    <ul className="label-list">
      {labels.map(label => (
        <FilterItem key={label} label={label} {...rest} />
      ))}
    </ul>
  );
};

export const FilterItem = ({ label, addToFilters, removeFilter }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    if (isSelected) {
      removeFilter(label);
    } else {
      addToFilters(label);
    }
    setIsSelected(!isSelected);
  };
  return (
    <li className={`${isSelected ? "selected" : ""}`} onClick={handleClick}>
      {label}
    </li>
  );
};
