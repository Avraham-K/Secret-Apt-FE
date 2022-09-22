import React from "react";
import { Button, Card } from "react-bootstrap";

function ApartmentCard(props) {
  const {
    SalePrice,
    GrLivArea,
    BedroomAbvGr,
    GarageCars,
    FullBath,
    marketValue
  } = props;

  let perchange = Math.round(-(100 - (SalePrice/marketValue)*100))

  return (
    <tr>
      <td>{BedroomAbvGr}</td>
      <td>{FullBath}</td>
      <td>{GrLivArea}</td>
      <td>{GarageCars}</td>
      <td>{marketValue}</td>
      <td style={marketValue > SalePrice ? {color:"#22CC14"} : {color: "#EF233C"}}>{SalePrice}</td>
      <td style={perchange < 0 ? {color:"#22CC14"} : {color: "#EF233C"}}>{perchange}%</td>
    </tr>
  );
}

export default ApartmentCard;
