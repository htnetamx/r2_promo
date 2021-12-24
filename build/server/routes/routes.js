"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const getById_1 = require("./product/getById");
const getAll_1 = require("./product/getAll");
const welcome_1 = require("./index/welcome");
const getProductsByPromoId_1 = require("./product/getProductsByPromoId");
class Routes {
    constructor(server) {
        this.baseUrl = "/api/v1/";
        this.server = server;
        this.getByIdRoute = new getById_1.getByIdRoute(server);
        this.getAllRoute = new getAll_1.getAllRoute(server);
        this.indexRoute = new welcome_1.IndexRoute(server);
        this.getProductsByPromoIdRoute = new getProductsByPromoId_1.getProductsByPromoIdRoute(server);
        this.configureApiEndPoints(this.baseUrl);
    }
    configureApiEndPoints(baseUrl) {
        this.indexRoute.configureEndPoints(baseUrl);
        this.getByIdRoute.configureEndPoints(baseUrl);
        this.getAllRoute.configureEndPoints(baseUrl);
        this.getProductsByPromoIdRoute.configureEndPoints(baseUrl);
    }
}
exports.Routes = Routes;
