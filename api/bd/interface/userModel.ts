import {Schema} from "mongoose";
import mongoose from "mongoose";

export type UserDocument = {
    _id: string; //tirar no get
    name : string;
    description : string;
    price : number; //adicionar R$ + ,00
    brand : string;
    isbn : number;
}

export const UserSchema: Schema = new Schema({
    name : {type: String, required: true},
    description : {type: String, required: false},
    price : {type: Number, required: true},
    brand : {type: String, required: true},
    isbn : {type: Number, required: true, unique: true}
});

export default mongoose.model<UserDocument>('User', UserSchema);
