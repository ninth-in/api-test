import mongoose from "mongoose";
import config from "config"; 

async function connect(){
    const dbUri = config.get<string>("dbUri");

    try{
        await mongoose.connect(dbUri);
        console.log("connect to DB");
    } catch(error){
        console.log("could not connect to DB");
        process.exit(1);
    }
}

export default connect;