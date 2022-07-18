import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { InnerContainer } from "./components/containers/InnerContainer";
import  Banner  from "./components/Banner";
import Categories from "./components/Categories";
import Business from "./components/Business";
import Roadmap from "./components/Roadmap";
import About from "./components/InfoSection";
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
      <div className="App">
        <InnerContainer>
          <Nav />
          <Banner />
        </InnerContainer>
      </div>
      <Categories />
      <Roadmap />
    <Footer />
    </Router>
  );
}

export default App;
