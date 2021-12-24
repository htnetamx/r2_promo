import { PromoBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { PromoService } from "../../entities";

export class getByIdUseCase implements UseCase<any, PromoBaseModel | null> {
  private _PromoService: PromoService;

  constructor() {
    this._PromoService = new PromoService();
  }

  public async execute(params: any): Promise<PromoBaseModel | null> {
    const result = await this._PromoService.getById(parseInt(params));
    console.log("useCase: ", result);
    return result;
  }
}
