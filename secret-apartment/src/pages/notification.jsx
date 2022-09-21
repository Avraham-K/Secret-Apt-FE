import "./Notification.css";
import Geomap from "../components/Geomap"
import { Button, Form, Card } from "react-bootstrap";
import Filter from "./filter-main-page";

export default function Notification() {
  function handleSubitEmail(e) {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <>
      <div className="mainContainer">
        <div className="notificationContainer d-flex flex-column align-items-center ">
          <Filter />
          <Card className='card'>
          <Form className='formCard'>
            <Form.Group
             className='form-label'
              onSubmit={(e) => {
                handleSubitEmail(e);
              }}
            >
              <Form.Label className='email_label'>Enter Email for Notifications</Form.Label>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
             <div className=" d-flex justify-content-start">
              <button className='submit_button' type="submit">
                Submit
              </button>
            </div>
          </Form>
          </Card>
          <Geomap/>
        </div>
      </div>
    </>
  );
}
