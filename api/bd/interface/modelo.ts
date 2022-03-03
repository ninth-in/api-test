import {Document} from "mongoose";

export default interface Tables extends Document{
    name : string;
    age : number;
    email : string;
}