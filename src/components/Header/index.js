import React from "react";

import { Container, Menu, Search } from "./styles";

import logo from "../../assets/logo.png";

const Header = function() {
  return (
    <Container>
      <div id="menuWrapper">
        <img className="brand-logo" src={logo} alt="logo" />
        <Menu>
          <button className="active-link">Início</button>
          <button>Séries</button>
          <button>Filmes</button>
          <button>Infantil</button>
        </Menu>
      </div>
      <div id="actions">
        <Search>
          <input type="text" placeholder="Busca" />
        </Search>
        <i className="fa fa-user user-icon" />
        <i className="fa fa-caret-down arrow-icon" />
      </div>
    </Container>
  );
};

export default Header;
