import {Document} from "mongoose";

//teste ...git
export default interface Tables extends Document{
    name: string;
    preco: number;
    descricao: string;
    marca: string;
}