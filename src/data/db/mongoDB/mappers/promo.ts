import { Mapper } from "../../../../application/base";
import { PromoBaseModel } from "../../../entities";
import { Promo, PromoMongoDB } from "../models";

export class PromoMapperMongoDB extends Mapper<
PromoMongoDB,
PromoBaseModel
> {
  mapFrom(param: PromoMongoDB): PromoBaseModel {
    return {
      id: "",
      name: "",
      seoFilename: "",
      pageSize: 0,
    };
  }
  mapTo(param: PromoBaseModel): PromoMongoDB {
    return new Promo({});
  }
}
