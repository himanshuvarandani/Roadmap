import React from "react"

import image1 from "../../Images/Image1.jpg"

const Home = () => {
  return (
    <div id="home">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 text-center">
            <h1>Lorem ipsum</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={image1} alt="Lorem ipsum" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
