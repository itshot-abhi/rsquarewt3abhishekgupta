import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../icons/nock-nock-logo.png";

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            src={logo}
            height="45"
            width="auto"
            className=" ml-5 pl-5"
            alt="nock-nock-logo"
          />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
