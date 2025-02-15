import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch(error){
        console.log("database connection failed", error);
    }
}
export default connectDB;