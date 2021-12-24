"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class PromoMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        var _a;
        console.log(param);
        var ext = param.MimeType.toString().indexOf("png") >= 0 ? "png" : "jpeg";
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
            seoFilename: typeof param.SeoFilename === undefined || param.SeoFilename === null
                ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
                : `https://testinglab.netamx.app/images/thumbs/${param.Id.toString().padStart(7, "0")}_${(_a = param.SeoFilename) === null || _a === void 0 ? void 0 : _a.toString()}_415.${ext}`,
            pageSize: param.PageSize,
        };
    }
    mapTo(param) {
        var _a, _b;
        return {
            Id: param.id.toString(),
            Name: param.name.toString(),
            SeoFilename: (_a = param.seoFilename) === null || _a === void 0 ? void 0 : _a.toString(),
            MimeType: (_b = param.seoFilename) === null || _b === void 0 ? void 0 : _b.toString().split(".")[1],
            PageSize: param.pageSize,
        };
    }
}
exports.PromoMapperMySQL = PromoMapperMySQL;
