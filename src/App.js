import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App