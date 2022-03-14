import express from "express";
import controller from "../controllers/user.controller";

const router = express.Router();

router
    .get('/product', controller.getAll)
    .post('/product', controller.createUser)
    .get('/product/:ID', controller.getID)
    .delete('/product/:ID', controller.deleteUser)
    .put('/product/:ID', controller.updateUser)
    .patch('/product/:ID', controller.updateName);

export default router;