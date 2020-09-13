import React from "react";
import { Link } from "react-router-dom";
import Singlefamily from "../icons/Singlefamily.png";
import Multihouse from "../icons/Multihouse.png";
import Townhouse from "../icons/Townhouse.png";
import Condominium from "../icons/Condominium.png";
import HouseCard from "./HouseCard";

import { Container, Col, Row, Button, Alert } from "reactstrap";

const houses = [Singlefamily, Multihouse, Townhouse, Condominium];
const names = ["Singlefamily", "Multihouse", "Townhouse", "Condominium"];

const Houses = () => {
  return (
    <Container>
      <div className="mt-3">
        <Alert color="light" className="h1 text-dark pl-5">
          What <span className="font-weight-bolder">Type of Home</span> are you
          looking to sell.
        </Alert>
      </div>
      <Row>
        {houses.map((home, index) => (
          <Col md={6} key={index} className="d-flex justify-content-between">
            {HouseCard(home, names[index])}
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Link to="/price">
          <Button
            color="link"
            size="lg"
            onClick={() =>
              localStorage.setItem("name", JSON.stringify("Other"))
            }
          >
            <h2 className="text-body">Other</h2>
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Houses;
