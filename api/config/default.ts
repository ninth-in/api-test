import mongoose from "mongoose"
import envConfig from "./env.config"

async function connect(){
    const dbUri = envConfig.MONGO_URI;

    try{
        await mongoose.connect(dbUri);
        console.log("connect to DB");
    } catch(error){
        console.log("could not connect to DB");
        process.exit(1);
    }
}

export default connect;
