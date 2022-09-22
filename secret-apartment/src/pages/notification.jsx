import "./Notification.css";
import { Button, Form, Card } from "react-bootstrap";
import { GiGrass } from "react-icons/gi";
import roofing from "../images/roofing.png";
import Filter from "./filter-main-page";
import door from '../images/door.png'
import grass from '../images/grass.jpg'

export default function Notification() {
  function handleSubitEmail(e) {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <>
    <div className="roof" >
      <img className="roof_img" src={roofing} />
      </div>
      <div className="mainContainer">
        <div className="notificationContainer d-flex flex-column align-items-center ">
          <Filter />
          <Card className="card">
            <Form className="formCard">
              <Form.Group
                className="form-label"
                onSubmit={(e) => {
                  handleSubitEmail(e);
                }}
              >
                <Form.Label className="email_label">
                  Enter Email for Notifications
                </Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
                <button className="submit_button" type="submit">
                  Submit
                </button>
              <div className="door_icon" style={{backgroundColor:"transparent"}}>
              <img className="door_img" src={door} style={{background:"transparent"}} />
                </div>
            </Form>
          </Card>
        </div>
      </div>
      <GiGrass style={{width:"900vh"}}/>
    </>
  );
}
