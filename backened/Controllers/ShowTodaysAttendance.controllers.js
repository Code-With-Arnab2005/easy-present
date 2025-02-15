import { Attendance } from "../models/Attendance.models.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const getTodaysAttendances = async (req, res) => {
    try {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let today = date.getDate();
        if (today < 10) {
            today = '0' + today;
        }
        if(month < 10){
            month = '0' + month;
        }
        let todaysDate = `${year}${month}${today}`;
        // console.log(todaysDate);
        const attendances = await Attendance.find();
        if(!attendances){
            throw new ApiError(500, error.message || "attendances not found try again")
        }
        // const todaysAttendances = attendances.filter((attendance) => (
        //     // console.log(typeof(attendance.createdAt))
        //     const { year, month, date } = (() => {
        //         const createdAt = new Date(attendance.createdAt);
        //         return {
        //             year: createdAt.getFullYear(),
        //             month: createdAt.getMonth() + 1,
        //             date: createdAt.getDate()
        //         };
        //     })();
        //     // attendance.createdAt.slice(':')[0].replaceAll('-', '')===todaysDate
        // ))
        const todaysAttendances = attendances.filter((attendance) => {
            const { year, month, date } = (() => {
                const createdAt = new Date(attendance.createdAt);
                return {
                    year: createdAt.getFullYear(),
                    month: createdAt.getMonth() + 1,
                    date: createdAt.getDate()
                };
            })();
        
            const formattedDate = `${year}${month.toString().padStart(2, '0')}${date.toString().padStart(2, '0')}`;
            return formattedDate === todaysDate;
        });
        return res.status(200).json(
            new ApiResponse(200, "todays attendances fetched successfully", todaysAttendances)
        )
    } catch (error) {
        throw new ApiError(501, error.message);
    }
}

export {
    getTodaysAttendances
}