import {Document} from "mongoose";

export default interface Tables extends Document{
    name : string;
    preco : number;
    descricao : string;
    marca : string;
}