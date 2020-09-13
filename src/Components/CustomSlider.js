import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Link } from "react-router-dom";

import { Container, Alert } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    top: "40%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  margin: {
    height: theme.spacing(5),
  },
}));

const marks = [
  {
    value: 100,
    label: "$100K",
  },
  {
    value: 250,
    label: "$250K",
  },
  {
    value: 500,
    label: "$500K",
  },
  {
    value: 750,
    label: "$750K",
  },
  {
    value: 1000,
    label: "$1M+",
  },
];

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const CustomSlider = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(100);

  const handleChange = (e, newPrice) => {
    setPrice(newPrice);
  };

  const handleSubmit = () => {
    localStorage.setItem("price", JSON.stringify(price));
  };

  var nf = new Intl.NumberFormat();

  return (
    <>
      <Container className="text-center ">
        <div>
          <Alert color="light" className="h1 text-body">
            What is your estimated{" "}
            <span className="font-weight-bolder">Home</span>
          </Alert>
        </div>

        <div className="my-5 py-5">
          <div className={classes.root}>
            <h2 className="text-info">${nf.format(`${price * 1000}`)}</h2>

            <PrettoSlider
              aria-label="pretto slider"
              defaultValue={100}
              step={10}
              marks={marks}
              min={100}
              max={1000}
              N
              onChange={handleChange}
            />

            <Link to="/thankyou">
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill btn-sm px-5"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomSlider;
