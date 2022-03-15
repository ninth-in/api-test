import express from "express";
import controller from "../controllers/user.controller";

const router = express.Router();

router
    .get('/products', controller.getAll)
    .post('/product', controller.createUser)
    .get('/product/:id', controller.getID)
    .delete('/product/:id', controller.deleteUser)
    .put('/product/:id', controller.updateUser)
    .patch('/product/:id', controller.updateName);

export default router;