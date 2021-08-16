import React from "react";
import { Container, NavigationContainer } from "./styles";

import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationContainer>
        <ul>
          <li>
            <NavLink to="/" exact>
              Painel de controle
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">Produtos</NavLink>
          </li>
        </ul>
      </NavigationContainer>
    </Container>
  );
};

export default Navigation;
