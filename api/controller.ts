import { Request, Response, NextFunction } from "express";
import Table from "./bd/interface/schema";
import mongoose from "mongoose";

const getAll = (requisicao:Request, resposta:Response, proximo: NextFunction) => {
    Table.find()
    .exec()
    .then(results => {
        return resposta.status(200).json({
            table: results,
            count: results.length
        });
    })
    .catch(error => {
        return resposta.status(500).json({
            message: error.message,
            error
        });
    });
};

//como comparar ids
const getID = (requisicao:Request, resposta:Response, proximo: NextFunction) => {
    const tableID = requisicao.params.ID;
    return Table.findById(tableID)
    .exec()
    .then(results => {
        resposta.status(200).json({
            table: results
        })
        resposta.status(404).json({
            message: 'not found'
        });
    })
    .catch(error => {
        resposta.status(500).json({
            message: error.message,
            error
        });
    });
};

//teste....git
const createTable = (requisicao:Request, resposta:Response, proximo: NextFunction) => {
    let {name, preco, descricao, marca} = requisicao.body;

    const table = new Table({
        _id: new mongoose.Types.ObjectId(),
        name,
        preco,
        descricao,
        marca
    });

    return table.save()
    .then(result => {
        return resposta.status(201).json({
            table: result
        });
    })
    .catch(error => {
        return resposta.status(500).json({
            message: error.message,
            error
        });
    });
};

const updateTable = (requisicao:Request, resposta:Response, proximo: NextFunction) => {
    const tableID = requisicao.params.ID;
    Table.findById(tableID)
    .exec()
    .then(results => {
        if(results){
        results.set(requisicao.body)
            return results
                .save()
                .then(result => {
                    return resposta.status(201).json({
                        table: result
                    });
                })
                .catch(error => {
                    return resposta.status(500).json({
                        message: error.message,
                        error
                    });
                });
        }else{
            return resposta.status(404).json({message: 'not found'});
        }
    })
    .catch(error => {
        resposta.status(500).json({
            message: error.message,
            error
        });
    });
};

const deleteTable = (requisicao:Request, resposta:Response, proximo: NextFunction) => {
    const tableID = requisicao.params.ID;
    return Table.findByIdAndDelete(tableID)
    .then(results => {
        resposta.status(201).json({
            message: 'deleted'
        })
        resposta.status(404).json({
            message: 'not found'
        });
    })
    .catch(error => {
        resposta.status(500).json({
            message: error.message,
            error
        });
    });

};

export default {getAll, createTable, getID, deleteTable, updateTable};