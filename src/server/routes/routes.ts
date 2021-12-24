import { Express } from "express";
import { getByIdRoute } from "./product/getById";
import { getAllRoute } from "./product/getAll";
import { IndexRoute } from "./index/welcome";
import { getProductsByPromoIdRoute } from "./product/getProductsByPromoId";
export class Routes {
  private server: Express;
  private baseUrl: string = "/api/v1/";
  private indexRoute: IndexRoute;
  private getByIdRoute: getByIdRoute;
  private getAllRoute: getAllRoute;
  private getProductsByPromoIdRoute: getProductsByPromoIdRoute;

  constructor(server: Express) {
    this.server = server;
    this.getByIdRoute = new getByIdRoute(server);
    this.getAllRoute = new getAllRoute(server);
    this.indexRoute = new IndexRoute(server);
    this.getProductsByPromoIdRoute = new getProductsByPromoIdRoute(server);
    this.configureApiEndPoints(this.baseUrl);
  }

  public configureApiEndPoints(baseUrl: string) {
    this.indexRoute.configureEndPoints(baseUrl);
    this.getByIdRoute.configureEndPoints(baseUrl);
    this.getAllRoute.configureEndPoints(baseUrl);
    this.getProductsByPromoIdRoute.configureEndPoints(baseUrl);
  }
}
