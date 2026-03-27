"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODES = exports.ApiError = exports.formatData = void 0;
const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
};
exports.STATUS_CODES = STATUS_CODES;
const formatData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data) {
        return { data };
    }
    else {
        throw new Error("Data not found");
    }
});
exports.formatData = formatData;
const ApiError = (name, description, error) => {
    switch (name) {
        case 'Not Found':
            return { name, statusCode: STATUS_CODES.NOT_FOUND, description, error };
        case 'Internal Error':
            return { name, statusCode: STATUS_CODES.INTERNAL_ERROR, description, error };
    }
};
exports.ApiError = ApiError;
