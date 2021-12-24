import { ProductBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { ProductService } from "../../entities/product";

export class getAllUseCase
  implements UseCase<any, Array<ProductBaseModel | null> | null>
{
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(
    params: any
  ): Promise<Array<ProductBaseModel | null> | null> {
    const result = await this._ProductService.getAll();
    return result;
  }

  public async execute2(id: any, numPerPage: any, page: any) {
    const result = await this._ProductService.getAllProduct(id, numPerPage, page);
    return result;
  }
}
