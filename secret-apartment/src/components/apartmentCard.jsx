import React from "react";
import { Button, Card } from "react-bootstrap";

function ApartmentCard(props) {
  const {
    Neighborhood,
    Street,
    SalePrice,
    GrLivArea,
    BedroomAbvGr,
    GarageCars,
    FullBath,
  } = props;

  return (
    <tr>
      <td>{Neighborhood}</td>
      <td>{Street}</td>
      <td>{GrLivArea}</td>
      <td>{BedroomAbvGr}</td>
      <td>{GarageCars}</td>
      <td>{FullBath}</td>
      <td>{SalePrice}</td>
      <td>1</td>
    </tr>

    //     <div
    // className="apartment-card">
    //       <Card>
    //         {/* <Card.Img
    //           variant="top"
    //           src={imageUrl}
    //           height="300em"
    //           width="300em"
    //           object-fit="contain"
    //         /> */}
    //         <Card.Body>
    //           <Card.Title>SalePrice: {SalePrice}</Card.Title>
    //           <Card.Text>LivArea: {GrLivArea}</Card.Text>
    //           <Card.Text >BedroomAbvGr: {BedroomAbvGr}</Card.Text>
    //           <Card.Text >GarageCars: {GarageCars}</Card.Text>
    //         </Card.Body>
    //         <Button>See more</Button>
    //       </Card>
    //     </div>
  );
}

export default ApartmentCard;
