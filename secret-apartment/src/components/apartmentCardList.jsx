import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";
import { Row, Col } from "react-bootstrap";
import ApartmentCard from "./apartmentCard";
import '../pages/main.css';


function ApartmentCardList( {aggResults, setAggResults}) {
  const { neighborRes = [], setNeighborRes } = useContext(GlobalContext);

  console.log("neighborRes", neighborRes);

  return (
    <div className="apartment-results-container">
      <table>
        <thead>
          <tr>
            <th>Rooms</th>
            <th>Bathrooms</th>
            <th>Apartment area (sqft)</th>
            <th>Parking</th>
            <th>Market Value ($)</th>
            <th>Asking Price ($)</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {neighborRes.map((apartment) => (
            <ApartmentCard
              key={apartment.Id}
              BedroomAbvGr={apartment.BedroomAbvGr}
              FullBath={apartment.FullBath}
              GrLivArea={apartment.GrLivArea}
              GarageCars={apartment.GarageCars}
              marketValue={apartment.marketValue}
              SalePrice={apartment.SalePrice}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApartmentCardList;
