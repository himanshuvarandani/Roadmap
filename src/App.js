import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navigation from "./Components/Navigation"
import LandingPage from "./Components/Landing"
import Footer from "./Components/Footer"

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path="/" component={LandingPage} />

      <Footer />
    </Router>
  )
}

export default App
