import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";
import { Row, Col } from "react-bootstrap";
import ApartmentCard from "./apartmentCard";

function ApartmentCardList() {
  const { neighborRes = [], setNeighborRes } = useContext(GlobalContext);

  console.log("neighborRes", neighborRes);

  return (
    <div className="apartment-results-container">
      <table>
        <thead>
          <tr>
            <th>Neighborhood</th>
            <th>Street</th>
            <th>Apartment area</th>
            <th>Rooms</th>
            <th>Parking</th>
            <th>Bathrooms</th>
            <th>Asking Price</th>
            <th>Market Value</th>
          </tr>
        </thead>
        <tbody>
          {neighborRes.map((apartment) => (
            <ApartmentCard
              key={apartment.Id}
              Neighborhood={apartment.Neighborhood}
              Street={apartment.Street}
              GrLivArea={apartment.GrLivArea}
              BedroomAbvGr={apartment.BedroomAbvGr}
              GarageCars={apartment.GarageCars}
              FullBath={apartment.FullBath}
              SalePrice={apartment.SalePrice}
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
