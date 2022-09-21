import "./Notification.css";
import { Button, Form } from "react-bootstrap";

export default function Notification() {
  function handleSubitEmail(e) {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <div className="mainContainer">
      <div className="notificationContainer d-flex flex-column align-items-center ">
        <div className="filter">filter</div>

        <Form>
          <Form.Group
            className="mb-3 ps-3"
            onSubmit={(e) => {
              handleSubitEmail(e);
            }}
          >
            <Form.Label>Enter email for notifications</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <div className=" d-flex justify-content-end">
          <Button  variant="primary" type="submit">
            Submit
          </Button>

          </div>
        </Form>
      </div>
    </div>
  );
}