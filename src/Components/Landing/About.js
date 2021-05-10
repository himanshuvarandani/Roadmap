import React from "react"

const About = () => {
  return (
    <div id="about">
      <br />
      <div className="container text-center pt-4 pb-4">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <hr />
          <h1>About Us</h1>
          <hr />
        </div>
        <br />
        <div className="row">
          <div id="whoAreWe" className="col-md-6">
            <h3>Who Are We?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              ipsa aspernatur id necessitatibus exercitationem cum et dolorem.
            </p>
          </div>
          <div id="whyUs" className="col-md-6">
            <h3>Why Us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              ipsa aspernatur id necessitatibus exercitationem cum et dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
