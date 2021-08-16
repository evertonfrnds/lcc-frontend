import useServiceHttp from "../../../core/services/useService";

export default function useProductService() {
  const service = useServiceHttp({
    baseEntity: "/products",
  });

  return service;
}
