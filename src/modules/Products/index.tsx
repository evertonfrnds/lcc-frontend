import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
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
  const { getEntities, deleteEntity } = useProductService();
  const history = useHistory();
  const [produtcts, setProducts] = useState<Product[]>([]);

  const handleGet = useCallback(() => {
    getEntities().then((products) => {
      setProducts(products);
    });
  }, [getEntities]);

  useEffect(() => {
    handleGet();
  }, [handleGet]);

  const handleDelete = useCallback(
    (id: string) => {
      if (window.confirm("Deseja realmente excluir")) {
        deleteEntity(id).then(() => {
          handleGet();
        });
      }
    },
    [deleteEntity, handleGet]
  );

  const handleEdit = useCallback(
    (id: string = "new") => {
      history.push(`/products/${id}`);
    },
    [history]
  );

  return (
    <Container>
      <ActionBar>
        <h3>Produtos</h3>
        <Button onClick={() => handleEdit()}>Adicionar</Button>
      </ActionBar>
      <ListContainer>
        {produtcts.map((p) => {
          return (
            <ItemProduct key={p.id}>
              <div className="left">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <h3 style={{ marginTop: 14 }}>R$ {p.value}</h3>
              </div>
              <div className="right">
                <IconButton onClick={() => handleEdit(p.id)}>
                  <i className="bx bx-edit-alt"></i>
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(p.id as string)}
                  className="mt-1 red"
                >
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
