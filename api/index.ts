import express from "express";
import bodyParser from "body-parser";
import roteador from "./routes/rotas";
import connect from "./config/default"

const port = process.env.port || 3000;
const app = express();

connect();
app.use(bodyParser.json());

app.use('/product-api/v1', roteador);

app.listen(port, async() => {
    console.log('ok!');
})