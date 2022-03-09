import {Document} from "mongoose";
import {Schema} from "mongoose";
import mongoose from "mongoose";

interface Tables extends Document{
    name : string;
    description : string;
    price : number;
    brand : string;
    isbn : number;
}

const TableSchema: Schema = new Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    brand : {type: String, required: true},
    isbn : {type: Number, required: true}
});

export default mongoose.model<Tables>('Table', TableSchema);
