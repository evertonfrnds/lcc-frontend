import React, { useEffect, useState } from "react";
import { Product } from "./models/product.model";
import useProductService from "./services/useProductService";
import {
  ActionBar,
  Button,
  Container,
  IconButton,
  ItemProduct,
  ListContainer,
} from "./styles";

const Products: React.FC = () => {
  const { getEntities } = useProductService();
  const [produtcts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getEntities().then((products) => {
      setProducts(products);
    });
  }, [getEntities]);

  return (
    <Container>
      <ActionBar>
        <h3>Produtos</h3>
        <Button>Adicionar</Button>
      </ActionBar>
      <ListContainer>
        {produtcts.map((p) => {
          return (
            <ItemProduct key={p.id}>
              <div className="left">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
              <div className="right">
                <IconButton>
                  <i className="bx bx-edit-alt"></i>
                </IconButton>
                <IconButton className="mt-1 red">
                  <i className="bx bx-trash-alt"></i>
                </IconButton>
              </div>
            </ItemProduct>
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default Products;
