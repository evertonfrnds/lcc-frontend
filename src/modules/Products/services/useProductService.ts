import useServiceHttp from "../../../core/services/useService";
import { Product } from "../models/product.model";

export default function useProductService() {
  const service = useServiceHttp<Product>({
    baseEntity: "/products",
  });

  return service;
}
