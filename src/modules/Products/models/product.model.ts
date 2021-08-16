import { Entity } from "../../../core/models/entity.model";

export type Product = Entity & {
  name: string;
  description: string;
  value: number;
};
