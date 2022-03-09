import express from "express";
import config from "config";
import bodyParser from "body-parser";
import roteador from "./routes/tables";
import connect from "./bd";

const port = config.get<number>('port');
const app = express();

connect();
app.use(bodyParser.json());

app.use('/product-api/v1', roteador);

app.listen(port, async() => {
    console.log('connect!');
})



