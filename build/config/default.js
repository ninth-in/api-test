"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = __importDefault(require("./env.config"));
function connect() {
    try {
        mongoose_1.default.connect(env_config_1.default.MONGO_URI);
        console.log("connect to DB");
    }
    catch (error) {
        console.log("could not connect to DB");
        process.exit(1);
    }
}
exports.default = connect;
