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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSevice_1 = __importDefault(require("../services/userSevice"));
const userService = new userSevice_1.default();
//GET
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userService.getAll();
            return res.status(200).json(users);
        }
        catch (err) {
            next(err);
        }
    });
}
//GET:ID
function getID(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userService.getID((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
            return res.status(200).json(user);
        }
        catch (err) {
            next(err);
        }
    });
}
//POST
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const newUser = req.body;
        const savedUser = yield userService.createUser(newUser);
        return res.status(201).json(savedUser);
    });
}
//PATCH
function updateName(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name } = req.body;
            const savedUser = yield userService.updateName((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, { name });
            return res.status(201).json(savedUser);
        }
        catch (err) {
            next(err);
        }
    });
}
//PUT
function updateUser(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, description, price, brand } = req.body;
            const savedUser = yield userService.updateUser((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, { name, description, price, brand });
            return res.status(201).json(savedUser);
        }
        catch (err) {
            next(err);
        }
    });
}
//DELETE
function deleteUser(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield userService.deleteUser((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
            return res.status(204).json({});
        }
        catch (err) {
            next(err);
        }
    });
}
exports.default = { getAll, getID, createUser, updateName, updateUser, deleteUser };
