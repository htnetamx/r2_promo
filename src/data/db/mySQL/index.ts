import {
  IProductRepository,
  IPromoRepository,
} from "../../../application/contracts";
import { Credential } from "../../../application/domain/credential";
import { ProductBaseModel, PromoBaseModel } from "data/entities";
import { ProductMapperMySQL } from "./mappers";
import { Connection } from "../../../connections/connection";
import { PromoMapperMySQL } from "./mappers/promo";

export class RepositoryMySQL implements IProductRepository {
  private userMapper: ProductMapperMySQL;
  constructor() {
    this.userMapper = new ProductMapperMySQL();
  }

  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        `select * from Product po left join Product_Picture_Mapping 
            ppm on po.Id = ppm.ProductId left join Picture pi on ppm.PictureId = pi.Id
            where po.MarkAsNew = 1 && po.Deleted = 0 && po.Deprecated = 0;`
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<ProductBaseModel>((r) => {
        return new ProductMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<ProductBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql:
          "select * from Product po left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId left join Picture pi on ppm.PictureId = pi.Id where po.Id=" +
          id +
          ";",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new ProductMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getAllProduct(id: any, numPerPage: any, page: any) {
    try {
      let numRows;
      let queryPagination;
      let numPages;
      let data: any;
      let skip = page * numPerPage;
      let limit = skip + "," + numPerPage;
      console.log(limit);
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT count(*) as numRows from netamx.Product",
      });
      data = Object.values(JSON.parse(JSON.stringify(results))) || [];
      numRows = data[0].numRows;
      numPages = Math.ceil(numRows / numPerPage);
      console.log("number of pages:", numPages);
      let [results2, fields2] = await Connection.mySQL2Pool.query({
        sql:
          "select * from Product po left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId left join Picture pi on ppm.PictureId = pi.Id order by po.Id limit " +
          limit +
          ";",
      });
      let data2 = Object.values(JSON.parse(JSON.stringify(results2)));
      let result2 = data2.map<ProductBaseModel>((r) => {
        return new ProductMapperMySQL().mapFrom(r as any);
      });
      return result2;
    } catch (error: unknown) {
      console.log(error);
      return null;
    }
  }
}

export class PromoRepositoryMySQL implements IPromoRepository {
  private userMapper: PromoMapperMySQL;
  constructor() {
    this.userMapper = new PromoMapperMySQL();
  }

  async getAll(): Promise<Array<PromoBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        `select * from Neta_Promotion po left join Picture pi on po.PictureId = pi.Id
            where po.Deleted = 0 and po.Published = 1;`
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<PromoBaseModel>((r) => {
        return new PromoMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<PromoBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: `select * from Neta_Promotion po left join Picture pi on po.PictureId = pi.Id
        where po.Deleted = 0 and po.Published = 1 and po.id=${id};`,
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new PromoMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getAllPromo(numPerPage: any, page: any) {
    try {
      let numRows;
      let queryPagination;
      let numPages;
      let data: any;
      let skip = page * numPerPage;
      let limit = skip + "," + numPerPage;
      console.log(limit);
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT count(*) as numRows from netamx.Neta_Promotion",
      });
      data = Object.values(JSON.parse(JSON.stringify(results))) || [];
      numRows = data[0].numRows;
      numPages = Math.ceil(numRows / numPerPage);
      console.log("number of pages:", numPages);
      let [results2, fields2] = await Connection.mySQL2Pool.query({
        sql: `select * from Neta_Promotion po left join Picture pi on po.PictureId = pi.Id
        where po.Deleted = 0 and po.Published = 1  order by po.Id limit ${limit};`,
      });
      let data2 = Object.values(JSON.parse(JSON.stringify(results2)));
      let result2 = data2.map<PromoBaseModel>((r) => {
        return new PromoMapperMySQL().mapFrom(r as any);
      });
      return result2;
    } catch (error: unknown) {
      console.log(error);
      return null;
    }
  }
}
