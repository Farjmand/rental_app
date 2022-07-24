import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import { InnerContainer } from "./components/containers/InnerContainer";
import Banner from "./components/Banner";
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
          <Menu />
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
