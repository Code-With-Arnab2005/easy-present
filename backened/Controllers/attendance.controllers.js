import { Attendance } from "../models/Attendance.models.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const attendaceHandler = async (req, res) => {
    try {
        const { fullname, email, course, department, year, section, roll, studentId } = req.body;
        if(!fullname || !email || !course || !department || !section || !roll || !studentId){
            throw new ApiError(401, "All fields are required");
        }
        const newAttendance = await Attendance.create({
            fullname,
            email,
            course,
            department,
            year,
            section,
            roll,
            studentId
        })
        if(!newAttendance){
            throw new ApiError(501, "Internal Server Error, please resubmit the form");
        }
        // console.log(newAttendance);
        return res.status(200).json(
            new ApiResponse(200, "Attendance submitted successfully", newAttendance)
        )
    } catch(error){
        console.log(error);
        throw new ApiError(500, error.message || "Something went wrong, please try again later")
    }
}

export {
    attendaceHandler
}