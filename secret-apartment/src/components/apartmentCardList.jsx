import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";
import { Row, Col } from "react-bootstrap";
import ApartmentCard from "./apartmentCard";
import '../pages/main.css';


function ApartmentCardList() {
  const { neighborRes = [], setNeighborRes } = useContext(GlobalContext);

  console.log("neighborRes", neighborRes);

  return (
    <div className="apartment-results-container">
      <table>
        <thead>
          <tr>
            <th>Rooms</th>
            <th>Bathrooms</th>
            <th>Apartment area</th>
            <th>Parking</th>
            <th>Asking Price</th>
            <th>Market Value</th>
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
              SalePrice={apartment.SalePrice}
              marketValue={apartment.marketValue}
            />
          ))}
        </tbody>
      </table>

      {/* <Row xs={1} md={2} lg={3} xl={4}>
        {neighborRes.map((apartment) => (
          <Col key={apartment.Id} >
            <ApartmentCard
            SalePrice={apartment.SalePrice}
            GrLivArea={apartment.GrLivArea}
            BedroomAbvGr={apartment.BedroomAbvGr}
            GarageCars={apartment.GarageCars}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
}

export default ApartmentCardList;
