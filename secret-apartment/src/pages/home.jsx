import React, { useState } from "react";
import "./home.css";
import logo from "../images/house.jpg";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <h1 className="display-1 mt-4">Secret Apartments</h1>
      </div>
      <div className="home-page-search-container">
        <input
          className="search-input"
          type="text"
          name="mainSearch"
          required="required"
          placeholder="Enter Your Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" className="search-button">
          Search
        </button>
      </div>
      <div className="home-img-container">
      <img src={logo} alt="house-image" className="home-house-img" />
      </div>
    </div>
  );
}

export default Home;
