import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, Button } from "reactstrap";

const HouseCard = (photo, name) => {
  const handleSubmit = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <Card className="mt-3 p-3 border border-white">
      <CardImg height="394" width="400" src={photo} />
      <CardBody className="text-center">
        <Link to="/price">
          <Button
            outline
            color="info"
            size="lg"
            className="rounded-pill"
            onClick={handleSubmit}
          >
            {name}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default HouseCard;
