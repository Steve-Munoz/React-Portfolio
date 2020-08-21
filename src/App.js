import React from "react";
// import NavbarComp from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline"; // adds some default visual styling to default elements, resets passing, resets styles
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </>

    // <Router>
    //   <NavbarComp />
    //   <Switch>
    //     <Route path="/" exact component={AboutMe} />
    //     {/*<Route path="/contact" component={ContactPage} />
    //     <Route path="/funfacts" component={FunFactsPage} />
    //     <Route path="/projects" component={ProjectPage} /> */}
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;
