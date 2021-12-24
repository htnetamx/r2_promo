import { ProductBaseModel } from "../../../data/entities";
export interface IProductRepository {
  getAll(): Promise<Array<ProductBaseModel | null> | null>;
  getById(id: Number): Promise<ProductBaseModel | null>;
  getAllProduct(id: any, numPerPage: any, page: any): any;
}
