import { Request, Response, NextFunction } from "express";
import Table from "../bd/interface/modelo";
import mongoose from "mongoose";

//GET
const getAll = (req:Request, res:Response, next: NextFunction) => {
    Table.find()
    .exec()
    .then(results => {
        return res.status(200).json({
            table: results,
            count: results.length
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

//GET:ID
const getID = (req:Request, res:Response, next: NextFunction) => {
    const tableID = req.params.ID;
    return Table.findById(tableID)
    .exec()
    .then(results => {
        res.status(200).json({
            table: results
        })
        res.status(404).json({
            message: 'not found'
        });
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            error
        });
    });
};

//POST
const createTable = (req:Request, res:Response, next: NextFunction) => {
    let {name, age, email} = req.body;

    const table = new Table({
        _id: new mongoose.Types.ObjectId(),
        name,
        age,
        email
    });

    return table.save()
    .then(result => {
        return res.status(201).json({
            table: result
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

//PATCH - ARRUMAR
/*const updateName = (req:Request, res:Response, next: NextFunction) => {
    const tableID = req.params.ID;
    Table.findById(tableID)
    .exec()
    .then(results => {
        if(results){
        results.set(req.body)
            return results
                .save()
                .then(result => {
                    return res.status(201).json({
                        table: result
                    });
                })
                .catch(error => {
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                });
        }else{
            return res.status(404).json({message: 'not found'});
        }
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            error
        });
    });
};
*/

//PUT
const updateTable = (req:Request, res:Response, next: NextFunction) => {
    const tableID = req.params.ID;
    Table.findById(tableID)
    .exec()
    .then(results => {
        if(results){
        results.set(req.body)
            return results
                .save()
                .then(result => {
                    return res.status(201).json({
                        table: result
                    });
                })
                .catch(error => {
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                });
        }else{
            return res.status(404).json({message: 'not found'});
        }
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            error
        });
    });
};

//DELETE
const deleteTable = (req:Request, res:Response, next: NextFunction) => {
    const tableID = req.params.ID;
    return Table.findByIdAndDelete(tableID)
    .then(results => {
        res.status(201).json({
            message: 'deleted'
        })
        res.status(404).json({
            message: 'not found'
        });
    })
    .catch(error => {
        res.status(500).json({
            message: error.message,
            error
        });
    });

};



export default {getAll, createTable, getID, deleteTable,updateTable};