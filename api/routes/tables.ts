import express from "express";
import {Request, Response, Express} from "express";
import controller from "../controller";

const roteador = express.Router();

roteador.get('/produtos', controller.getAll);
roteador.post('/produto', controller.createTable);
roteador.get('/get/:tableID', controller.getID);
roteador.delete('/delete/:tableID', controller.deleteTable);
roteador.patch('/patch/:tableID', controller.updateTable);

export default roteador;