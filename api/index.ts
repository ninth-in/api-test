import express from "express";
import bodyParser from "body-parser";
import roteador from "./routes/rotas";
import connect from "./config/default"
import envConfig from "./config/env.config";

const app = express();
const {PORT, API_ROOT_PATH} = envConfig;

connect();
app.use(bodyParser.json());

app.use(API_ROOT_PATH, roteador);

app.listen(PORT, async() => {
    console.log('ok!');
})