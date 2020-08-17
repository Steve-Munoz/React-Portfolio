import React from "react";
import NavbarComp from "./components/Navbar";
import Footer from "./components/Footer";
// import AboutMe from "./pages/AboutMe";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <NavbarComp />
      <h1> hello</h1>
      <Footer />
    </div>

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
