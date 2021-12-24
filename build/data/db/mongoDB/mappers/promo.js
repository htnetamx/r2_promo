"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoMapperMongoDB = void 0;
const base_1 = require("../../../../application/base");
const models_1 = require("../models");
class PromoMapperMongoDB extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: "",
            name: "",
            seoFilename: "",
            pageSize: 0,
        };
    }
    mapTo(param) {
        return new models_1.Promo({});
    }
}
exports.PromoMapperMongoDB = PromoMapperMongoDB;
