import { PromoBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { PromoService } from "../../entities";

export class getAllUseCase
  implements UseCase<any, Array<PromoBaseModel | null> | null>
{
  private _PromoService: PromoService;

  constructor() {
    this._PromoService = new PromoService();
  }

  public async execute(
    params: any
  ): Promise<Array<PromoBaseModel | null> | null> {
    const result = await this._PromoService.getAll();
    return result;
  }

  public async execute2(
    numPerPage: any, page:any
  ){
    const result = await this._PromoService.getAllPromo(numPerPage, page);
    return result;
  }
}
