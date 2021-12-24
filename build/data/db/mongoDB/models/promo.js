"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promo = exports.PromoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.PromoSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    zipPostalCode: {
        type: String,
    },
    address1: {
        type: String,
    },
    company: {
        type: String,
    },
    country: {
        type: String,
    },
    stateProvince: {
        type: String,
    },
    city: {
        type: String,
    },
    address2: {
        type: String,
    },
    roles: [
        {
            ref: "Role",
            type: mongoose_1.default.Schema.Types.ObjectId,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
const Promo = mongoose_1.default.model("Promo", exports.PromoSchema);
exports.Promo = Promo;
