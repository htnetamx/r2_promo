import { PromoInputModel } from "../../application/domain";

export interface PromoBaseModel {
  id: string;
  name: string;
  seoFilename: string;
  pageSize: number;
}

export class Promo implements PromoBaseModel {
  public id: string;
  public name: string;
  public seoFilename: string;
  public pageSize: number;

  constructor(data: PromoInputModel) {
    this.id = data.Id;
    this.name = data.Name;
    this.seoFilename = data.SeoFilename;
    this.pageSize = data.PageSize;
  }
}
