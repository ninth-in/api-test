import express from "express";
import controller from "../controllers/controller";

const router = express.Router();

router
    .get('/product', controller.getAll)
    .post('/product', controller.createTable)
    .get('/product/:ID', controller.getID)
    .delete('/product/:ID', controller.deleteTable)
    .put('/product/:ID', controller.updateTable);
    //router.patch('/product/:ID', controller.updateName);

export default router;