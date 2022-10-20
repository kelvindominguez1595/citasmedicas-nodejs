import mongoose from "mongoose";

const MongoDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection MongoDB Success");
    } catch (error) {
        console.log("Error the connection mongo db");
        throw new Error(error);
    }
}

export default MongoDbConnection;