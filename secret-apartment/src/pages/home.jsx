import React from "react";
import "./home.css";
import logo from "../images/house.jpg";
import AutoCompleteInput from "../components/AutoComplete";

function Home() {

  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <h1 className="display-1 mt-4">Secret Apartments</h1>
      </div>
      <div className="home-page-search-container">
        <AutoCompleteInput />
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
