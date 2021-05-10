import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navigation from "./Components/Navigation"
import LandingPage from "./Components/Landing"
import Footer from "./Components/Footer"
import WebDevelopment from "./Components/WebDevelopment"

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/webDevelopment" component={WebDevelopment} />

      <Footer />
    </Router>
  )
}

export default App
