import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/saved" component={Saved} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
