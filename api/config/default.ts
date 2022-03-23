import mongoose from "mongoose"
import envConfig from "./env.config"

function connect(){
    try{
        mongoose.connect(envConfig.MONGO_URI);
        console.log("connect to DB");
    } catch(error){
        console.log("could not connect to DB");
        process.exit(1);
    }
}

export default connect;
