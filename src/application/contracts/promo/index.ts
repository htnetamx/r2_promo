import { PromoBaseModel } from "../../../data/entities";
export interface IPromoRepository {
  getAll(): Promise<Array<PromoBaseModel | null> | null>;
  getById(id: Number): Promise<PromoBaseModel | null>;
  getAllPromo(numPerPage: any, page:any): any;
}
