import React from "react";
import "./home.css";
import logo from "../images/house.jpg";
import AutoCompleteInput from "../components/AutoComplete";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer">
      <div className="home-page-header">
        <h1 className="display-1 mt-4 font-main">Secret Apartments</h1>
      </div>
      <div className="home-page-search-container">
        <AutoCompleteInput />
        <button type="button" className="search-button" onClick={navigate("/main")}>
          Search
        </button>
      </div>
      <div className="home-img-container">
        {/* <img src={logo} alt="house-image" className="home-house-img" /> */}
      </div>
    </div>
  );
}

export default Home;
