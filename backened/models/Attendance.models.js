import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true,
    },
    roll: {
        type: Number,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const Attendance = mongoose.model("Attendance", AttendanceSchema);