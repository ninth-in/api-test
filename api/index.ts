import express from "express";
import bodyParser from "body-parser";
import roteador from "./routes/rotas";
import connect from "./config/default"

const PORT = process.env.PORT || 3000;
const app = express();

connect();
app.use(bodyParser.json());

app.use('/product-api/v1', roteador);

app.listen(PORT, async() => {
    console.log('ok!');
})