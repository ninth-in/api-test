import Tables from "./modelo";
import {Schema} from "mongoose";
import mongoose from "mongoose";

//teste... git
const TableSchema: Schema = new Schema({
    name: {type: String, required: true},
    preco: {type: Number, required: true},
    descricao: {type: String, required: true},
    marca: {type: String, required: true}
});

export default mongoose.model<Tables>('Table', TableSchema);