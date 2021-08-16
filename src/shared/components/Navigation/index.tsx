import React from "react";
import { Container, NavigationContainer } from "./styles";

import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationContainer>
        <ul>
          <li>
            <Link to="/" className="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
        </ul>
      </NavigationContainer>
    </Container>
  );
};

export default Navigation;
