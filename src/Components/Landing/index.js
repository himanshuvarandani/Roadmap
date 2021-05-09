import React from "react"

import "./Landing.css"

import Home from "./Home.js"
import About from "./About.js"
import Services from "./Services.js"
import Contact from "./Contact.js"

const LandingPage = () => {
  return (
    <div className="landing">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default LandingPage
