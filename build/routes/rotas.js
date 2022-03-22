"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
router
    .get('/products', user_controller_1.default.getAll)
    .post('/product', user_controller_1.default.createUser)
    .get('/product/:id', user_controller_1.default.getID)
    .delete('/product/:id', user_controller_1.default.deleteUser)
    .put('/product/:id', user_controller_1.default.updateUser)
    .patch('/product/:id', user_controller_1.default.updateName);
exports.default = router;
