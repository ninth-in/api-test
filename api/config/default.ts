import mongoose from "mongoose";

async function connect(){
    const dbUri = "mongodb+srv://root:12345@cluster0.by0jq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    try{
        await mongoose.connect(dbUri);
        console.log("connect to DB");
    } catch(error){
        console.log("could not connect to DB");
        process.exit(1);
    }
}

export default connect;
