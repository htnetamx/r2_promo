import bcrypt from "bcryptjs";
import { Promo, PromoBaseModel } from "../../../data/entities";
import { IPromoRepository } from "../../contracts";
import { PromoRepositoryMongoDB, RepositoryMongoDB } from "../../../data/db/mongoDB";
import { PromoRepositoryMySQL } from "../../../data/db/mySQL";
import { Credential, PromoInputModel } from "../../domain";
import {
  ServiceResponse,
  IServiceResponse,
  GroupedService,
  IGroupedService,
} from "../../base";

export interface IPromoService {
  mongoDB: IPromoRepository;
  mySQL: IPromoRepository;
}

export class PromoService {
  public repos: IPromoService = {
    mongoDB: new PromoRepositoryMongoDB(),
    mySQL: new PromoRepositoryMySQL(),
  };

  //Conjunto de servicios bases de datos
  async getAll(): Promise<Array<PromoBaseModel | null> | null> {
    try {
      var promises: Array<Promise<Array<PromoBaseModel | null> | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IPromoRepository>entry[1]).getAll())
      );
      let result_promises = await Promise.all(promises);
      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);

        var succeses: Array<
          IServiceResponse<Array<PromoBaseModel | null> | null>
        > = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }

  async getById(id: Number): Promise<PromoBaseModel | null> {
    try {
      var promises: Array<Promise<PromoBaseModel | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IPromoRepository>entry[1]).getById(id))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<IServiceResponse<PromoBaseModel | null>> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        console.log("r_promoesis: ", result_promises);
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }



  async getAllPromo(numPerPage: any, page: any){
    try {
      var promises: Array<Promise<Array<PromoBaseModel | null> | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IPromoRepository>entry[1]).getAllPromo(numPerPage, page))
      );
      let result_promises = await Promise.all(promises);
      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);

        var succeses: Array<
          IServiceResponse<Array<PromoBaseModel | null> | null>
        > = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      //console.log(error);
      return null;
    }
  }
}
