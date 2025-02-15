import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    }
})

export const URL = mongoose.model("URL", URLSchema);