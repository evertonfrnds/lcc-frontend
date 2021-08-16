/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import api from "../../config/api";
import { DeepPartial } from "../utils/deep-partial";

type ServiceConfig = {
  baseEntity: string;
};

function useServiceHttp<T = any>({ baseEntity }: ServiceConfig) {

  const getEntities = useCallback(async (): Promise<T[]> => {
    const response = await api.get(baseEntity);
    const data = response.data;

    return data;
  }, []);

  const getEntityById = useCallback(async (id: string): Promise<T> => {
    const response = await api.get(`${baseEntity}/${id}`);
    const data = response.data;

    return data;
  }, []);

  const createEntity = useCallback(async (entity: T): Promise<T> => {
    const response = await api.post(baseEntity, entity);
    const data = response.data;

    return data;
  }, []);

  const updateEntity = useCallback(
    async (id: string, entity: DeepPartial<T>): Promise<T> => {
      const response = await api.put(`${baseEntity}/${id}`, entity);
      const data = response.data;

      return data;
    },
    []
  );

  const deleteEntity = useCallback(async (id: string): Promise<T> => {
    const response = await api.delete(`${baseEntity}/${id}`);
    const data = response.data;

    return data;
  }, []);

  return {
    getEntities,
    getEntityById,
    createEntity,
    updateEntity,
    deleteEntity,
  };
}

export default useServiceHttp;
