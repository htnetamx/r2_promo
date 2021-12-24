"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promo = void 0;
class Promo {
    constructor(data) {
        this.id = data.Id;
        this.name = data.Name;
        this.seoFilename = data.SeoFilename;
        this.pageSize = data.PageSize;
    }
}
exports.Promo = Promo;
