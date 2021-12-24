import { Mapper } from "../../../../application/base";
import { PromoBaseModel } from "../../../entities";
import { PromoMySQL } from "../models";

export class PromoMapperMySQL extends Mapper<PromoMySQL, PromoBaseModel> {
  mapFrom(param: PromoMySQL): PromoBaseModel {
    console.log(param);
    var ext = param.MimeType.toString().indexOf("png") >= 0 ? "png" : "jpeg";
    return {
      id: param.Id.toString(),
      name: param.Name.toString(),
      seoFilename:
        typeof param.SeoFilename === undefined || param.SeoFilename === null
          ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
          : `https://testinglab.netamx.app/images/thumbs/${param.Id.toString().padStart(
              7,
              "0"
            )}_${param.SeoFilename?.toString()}_415.${ext}`,
      pageSize: param.PageSize,
    };
  }
  mapTo(param: PromoBaseModel): PromoMySQL {
    return {
      Id: param.id.toString(),
      Name: param.name.toString(),
      SeoFilename: param.seoFilename?.toString(),
      MimeType: param.seoFilename?.toString().split(".")[1],
      PageSize: param.pageSize,
    };
  }
}
