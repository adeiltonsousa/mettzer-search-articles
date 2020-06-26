import React from "react";

import logo from "../../assets/logo_mettzer.svg";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <figure>
        <img src={logo} alt="Logo Metter" />
      </figure>
    </Container>
  );
}

export default Header;
