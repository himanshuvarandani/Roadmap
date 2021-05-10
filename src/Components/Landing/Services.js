import React from "react"
import { Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChartArea,
  faGlobe,
  faMobileAlt,
  faRobot,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <div id="services">
      <br />
      <div className="container pt-4 pb-4">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <hr />
          <h1>Services</h1>
          <hr />
        </div>
        <div className="text-center pt-4 pb-2">
          <h3>Check Our Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
            provident? Eos unde perspiciatis quam quo accusantium. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <div id="WD">
              <Card style={{ width: "22rem" }}>
                <FontAwesomeIcon icon={faGlobe} size="2x" />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur elit.
                  </Card.Text>
                  <a href="/webDevelopment">
                    <Button variant="primary">Learn More</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div id="AD">
              <Card style={{ width: "22rem" }}>
                <FontAwesomeIcon icon={faMobileAlt} size="2x" />
                <Card.Body>
                  <Card.Title>App Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur elit.
                  </Card.Text>
                  <a href="/webDevelopment">
                    <Button variant="primary">Learn More</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div id="ML">
              <Card style={{ width: "22rem" }}>
                <FontAwesomeIcon icon={faChartArea} size="2x" />
                <Card.Body>
                  <Card.Title>Machine Learning</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur elit.
                  </Card.Text>
                  <a href="/webDevelopment">
                    <Button variant="primary">Learn More</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div id="AI">
              <Card style={{ width: "22rem" }}>
                <FontAwesomeIcon icon={faRobot} size="2x" />
                <Card.Body>
                  <Card.Title>Artificial Intelligence</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur elit.
                  </Card.Text>
                  <a href="/webDevelopment">
                    <Button variant="primary">Learn More</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
