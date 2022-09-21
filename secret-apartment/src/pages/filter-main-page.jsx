import React from "react";
import "./filter.css";

export default function Filter() {
  return (
    <div class="filter-main">
      <div class="search-filters">
        <label>
          Price Range:
          <input type="text" placeholder="From:" />
          <input type="text" placeholder="To:" />
        </label>
        <label>
          Minimum Property Size:
          <input type="text" placeholder="size" />
        </label>
        <label>
          Number of Rooms
          <select type="text">
            <option value="option1" disabled selected>
             Select your Number of Rooms
            </option>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5 and above</option>
          </select>
        </label>
        <label>Packing
          <input type="text" placeholder="parking" />
        </label>
        <label>Type of Property
          <input type="text" placeholder="type of property" />
        </label>
        <label> Construction started at:
          <input type="text" placeholder="constructed as of..." />
        </label>
      </div>
      <button className="search-button button-63" role="button">Search</button>
    </div>
  );
}
