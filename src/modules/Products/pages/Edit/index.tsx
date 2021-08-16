/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Product } from "../../models/product.model";
import useProductService from "../../services/useProductService";
import { Container, Form, Input, Button } from "./styles";

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getEntityById, createEntity, updateEntity } = useProductService();
  const history = useHistory();
  const [prod, setProd] = useState<Product>({
    name: "",
    description: "",
    value: 0,
  } as Product);

  useEffect(() => {
    if (id === "new") {
      return;
    } else {
      getEntityById(id).then((p) => {
        setProd(p);
      });
    }
  }, []);

  const handleEdit = useCallback((e: any) => {
    const { name, value } = e.target;
    setProd((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleCancel = useCallback(() => {
    history.goBack();
  }, []);

  const handleOnSubmit = () => {
    if (prod.id) {
      updateEntity(prod.id, {
        ...prod,
        created_at: undefined,
        updated_at: undefined
      }).then(() => {
        history.push("/products");
      });
    } else {
      createEntity(prod).then(() => {
        history.push("/products");
      });
    }
  };

  return (
    <Container>
      <Form>
        <h3>Produto</h3>
        <div className="row">
          <Input
            value={prod.name}
            name="name"
            onChange={(event) => handleEdit(event)}
            placeholder="Nome do produto"
          />

          <Input
            value={prod.value}
            name="value"
            onChange={(event) => handleEdit(event)}
            type="number"
            placeholder="Valor do produto"
          />
        </div>
        <div className="row">
          <Input
            value={prod.description}
            name="description"
            onChange={(event) => handleEdit(event)}
            placeholder="Descrição do produto"
          />
        </div>
        <div className="row right">
          <Button className="red" onClick={() => handleCancel()}>
            Cancelar
          </Button>
          <Button onClick={() => handleOnSubmit()}>Confirmar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProductEdit;
