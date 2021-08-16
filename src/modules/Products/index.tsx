import React, { useEffect } from "react";
import useProductService from "./services/useProductService";
import { ActionBar, Button, Container } from "./styles";

const Products: React.FC = () => {
  const { getEntities } = useProductService();

  useEffect(() => {
    getEntities().then((products) => {
      console.log(products);
    });
  }, []);
  return (
    <Container>
      <ActionBar>
        <h3>Produtos</h3>
        <Button>Adicionar</Button>
      </ActionBar>
    </Container>
  );
};

export default Products;
