import express from "express";
import config from "config";
import bodyParser from "body-parser";
import roteador from "./routes/rotas";
import connect from "./bd/index"

const port = config.get<number>('port');
const app = express();

connect();
app.use(bodyParser.json());

app.use('/product-api/v1', roteador);

app.listen(port, async() => {
    console.log('ok!');
})