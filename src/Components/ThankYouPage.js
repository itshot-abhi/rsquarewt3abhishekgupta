import React, { useState, useEffect } from "react";

const Thankyoupage = (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("name")));
    setPrice(JSON.parse(localStorage.getItem("price")));
  }, []);

  var nf = new Intl.NumberFormat();
  return (
    <div class="container d-flex flex-column align-items-center">
      <div className="text-center m-4">
        <h1>Thank You </h1>
        <h2>Our Team working hard to find best buyer for your House.</h2>
      </div>
      <div className="text-center mt-5 px-5 py-1 rounded-pill border border-success">
        <h4>
          Model of House: <span className="font-weight-bold">{name}</span>
        </h4>
        <h4>
          Expected price of House:{" "}
          <span className="font-weight-bold">
            ${nf.format(`${price * 1000}`)}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Thankyoupage;
