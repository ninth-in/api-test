import Tables from "./modelo";
import {Schema} from "mongoose";
import mongoose from "mongoose";

const TableSchema: Schema = new Schema({
    name : {type: String, required: true},
    age : {type: Number, required: true},
    email : {type: String, required: true}
});

export default mongoose.model<Tables>('Table', TableSchema);