import { Request, Response, NextFunction } from "express";
import User, { UserDocument } from "../bd/interface/userModel"
import mongoose from "mongoose";
import UserService from "../services/userSevice";

const userService: UserService = new UserService();

//GET
async function getAll(req:Request, res:Response, next: NextFunction): Promise<any>{
    try {
        const users: UserDocument[] = await userService.getAll();
        return res.status(200).json(users);
      } catch (err: any) {
        next(err);
      }
}

//GET:ID
async function getID(req:Request, res:Response, next: NextFunction): Promise<any>{
    try {
        const user: UserDocument = await userService.getID(req?.params?.id);
        return res.status(200).json(user);
      } catch (err: any) {
        next(err);
      }
}

//POST
async function createUser(req:Request, res:Response, next: NextFunction): Promise<any>{
    console.log(req.body);
    const newUser: UserDocument = req.body as UserDocument;
    const savedUser: UserDocument = await userService.createUser(newUser);
    return res.status(201).json(savedUser);
}

//PATCH
async function updateName(req:Request, res:Response, next: NextFunction): Promise<any>{
  try {
    const {name} = req.body as UserDocument;
    const savedUser: UserDocument = await userService.updateName(req?.params?.id, {name} as UserDocument)
    return res.status(201).json(savedUser);
    } catch (err: any) {
      next(err);
    }
}

//PUT
async function updateUser(req:Request, res:Response, next: NextFunction): Promise<any>{
  try {
    const {name, description, price, brand} = req.body as UserDocument;
    const savedUser: UserDocument = await userService.updateUser(req?.params?.id, {name, description, price, brand} as UserDocument)
    return res.status(201).json(savedUser);
    } catch (err: any) {
      next(err);
    }
}

//DELETE
async function deleteUser(req:Request, res:Response, next: NextFunction): Promise<any>{
  try{
    await userService.deleteUser(req?.params?.id);
    return res.status(204).json({});
    } catch(err: any){
    next(err);
    }
  }

export default {getAll, getID, createUser, updateName, updateUser, deleteUser};