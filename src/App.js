import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

import CustomSlider from "./Components/CustomSlider";
import Houses from "./Components/Houses";
import ThankYouPage from "./Components/ThankYouPage";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Container fluid>
          <Header />
          <Route exact path="/" component={Houses} />
          <Route exact path="/price" component={CustomSlider} />
          <Route exact path="/thankyou" component={ThankYouPage} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
