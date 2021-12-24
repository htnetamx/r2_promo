import { IProductRepository, IPromoRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain";
import { ProductBaseModel, PromoBaseModel } from "../../entities";
import { ProductMapperMongoDB, PromoMapperMongoDB } from "./mappers";

export class RepositoryMongoDB implements IProductRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: ProductMapperMongoDB;

  constructor() {
    this.userMapper = new ProductMapperMongoDB();
  }

  async getAll(): Promise<Array<ProductBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<ProductBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }


  async getAllProduct(params: any) {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}

export class PromoRepositoryMongoDB implements IPromoRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: PromoMapperMongoDB;

  constructor() {
    this.userMapper = new PromoMapperMongoDB();
  }

  async getAll(): Promise<Array<PromoBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<PromoBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }


  async getAllPromo(params: any) {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}
