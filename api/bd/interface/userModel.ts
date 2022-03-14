import {Schema} from "mongoose";
import mongoose from "mongoose";

export type UserDocument = {
    _id: string;
    name : string;
    description : string;
    price : number;
    brand : string;
    isbn : number;
}

const UserSchema: Schema = new Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    brand : {type: String, required: true},
    isbn : {type: Number, required: true, unique: true}
});

export default mongoose.model<UserDocument>('User', UserSchema);
