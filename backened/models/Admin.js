import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    instititute: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    }
})

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;