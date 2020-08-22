import React from "react";
// import NavbarComp from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline"; // adds some default visual styling to default elements, resets passing, resets styles
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import { Route } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
