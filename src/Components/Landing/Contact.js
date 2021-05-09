import React from "react"
import { Button, Card, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMailBulk,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div id="contactUs">
      <div className="container">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <hr />
          <h1>Contact Us</h1>
          <hr />
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 pt-5 pb-5">
            <h3 className="text-center">Send Us Message</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              provident? Eos unde perspiciatis quam quo accusantium.
            </p>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextArea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center pt-3 pb-3">
            <Card style={{ width: "20rem" }}>
              <FontAwesomeIcon icon={faMailBulk} size="2x" />
              <Card.Body>
                <Card.Title>Mail: lorem@gmail.com</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur elit.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <Card.Body>
                <Card.Title>Phone: 01234-56789</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur elit.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <Card.Body>
                <Card.Title>Location: India</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
