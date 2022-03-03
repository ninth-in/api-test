import express from "express";
import config from "config";
import bodyParser from "body-parser";
import roteador from "./routes/tables";

const port = config.get<number>('port');
const app = express();

app.use(bodyParser.json());

app.use('/api/tables',roteador);

app.listen(port, async() => {
    console.log('connect!');
})

app.use('/tables/', roteador);

