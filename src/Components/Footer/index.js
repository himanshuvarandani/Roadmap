import React from "react"
import { Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-6">
            <h5>Roadmap</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis provident rerum ipsa vero sapiente dolore, qui
              voluptatibus.
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5>Services</h5>
            <p>
              <a href="#">Web Development</a>
              <br />
              <a href="#">App Development</a>
              <br />
              <a href="#">Machine Lerning</a>
              <br />
              <a href="#">Artificial Intelligence</a>
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5>About</h5>
            <p>
              <a href="#">Who are we?</a>
              <br />
              <a href="#">Why us?</a>
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5>Terms</h5>
            <p>
              <a href="#">Terms and Conditions</a>
              <br />
              <a href="#">Privacy Policy</a>
              <br />
              <a href="#">Team</a>
              <br />
              <a href="#">Contact Us</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-10">
            <h5>Subscription</h5>
            <p>Get news letters and updates</p>
            <Form>
              <Form.Group>
                <Form.Row>
                  <div className="p-0 col-8 col-sm-10 col-lg-6">
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter Email"
                      className="search"
                    />
                  </div>
                  <div className="p-0 col-4 col-sm-2 col-lg-6">
                    <Button className="fontButton">Search</Button>
                  </div>
                </Form.Row>
              </Form.Group>
            </Form>
            <div className="row">
              <div className="col-5 col-sm-3 col-lg-6">
                <p>Follow Us:</p>
              </div>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </div>
        </div>
        <div className="text-center pt-2">
          <p>Copyright @Roadmap 2021-2050</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
