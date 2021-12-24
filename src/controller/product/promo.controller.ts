import { PromoInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/promo/getById";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/promo/getAll";
import { PromoBaseModel } from "data/entities";

export class PromoController {
  async getAll(): Promise<Array<PromoBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute(null);
    return data;
  }

  async getById(id: any): Promise<PromoBaseModel | null> {
    const useCase = new getByIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }

  async getAllPromo(numPerPage: any, page:any): Promise<Array<PromoBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute2(numPerPage, page);
    console.log(data);
    return data;
  }
}
