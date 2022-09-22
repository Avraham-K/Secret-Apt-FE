import "./Notification.css";
import { Button, Form, Card } from "react-bootstrap";
import Filter from "./filter-main-page";
// import { } from "react-icons/gi";


export default function Notification() {
  function handleSubitEmail(e) {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <>
    <center>
      <div className="Main-Page-Wrapper">
        <div className="mt-5">
          <Filter table={false} />
          <center className='center mb-4'>
        
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
              <button className='submit_button' type="submit">
                Submit
              </button>
          </Form>
          </center>
        </div>
      </div>
    </center>
{/* <GiGrassMushroom /> */}
</>

  );
}
