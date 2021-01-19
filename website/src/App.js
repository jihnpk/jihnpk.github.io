import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles options={particlesOptions}/>
        <Header />
        <Navbar />
        <div className="body">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
