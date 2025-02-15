import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from "./Input";
import Select from './Select';

const AttendanceForm = () => {

    const navigate = useNavigate();

    const { control, register, handleSubmit, getValues, setValue } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            course: "",
            department: "",
            year: "",
            section: "",
            roll: "",
            studentId: "",
        }
    });

    const submit = async (data) => {
        try {
            // console.log(data);
            await fetch("http://localhost:3000/api/v1/attendance", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify content type
                },
                body: JSON.stringify(data), // Convert the data object to a JSON string
            })
                .then(() => (
                    navigate("/successful-attendance")
                ))
                .catch((err) => console.log(err));
        } catch (error) {
            console.log("Error submission: ", error);
            navigate("/attendance-form")
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="my-10 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Attendance Form</h2>
            <div className="space-y-6">
                <Input
                    label="Fullname:"
                    placeholder="Enter your full name"
                    className="input-field"
                    {...register("fullname", { required: "fullname is required" })}
                />
                <Input
                    label="Email:"
                    placeholder="Enter your email address"
                    type="email"
                    className="input-field"
                    {...register("email", { required: "email is required" })}
                />
                <Input
                    label="Course:"
                    placeholder="Enter your email address"
                    className="input-field"
                    {...register("course", { required: "course is required" })}
                />
                <Select
                    title="Select your Stream:"
                    options={["CSE", "AIML", "DS", "ECE", "IT", "ME", "EE"]}
                    className="input-field"
                    {...register("department", { required: "department is required" })}
                />
                <Select
                    title="Select your Year:"
                    options={["1st", "2nd", "3rd", "4th"]}
                    className="input-field"
                    {...register("year", { required: "year is required" })}
                />
                <Select
                    title="Select your Section:"
                    options={["A", "B", "C", "D"]}
                    className="input-field"
                    {...register("section", { required: "section is required" })}
                />
                <Input
                    label="Roll:"
                    placeholder="Enter your Roll"
                    className="input-field"
                    {...register("roll", { required: "roll is required" })}
                />
                <Input
                    label="Student ID:"
                    placeholder="Enter your email address"
                    className="input-field"
                    {...register("studentId", { required: "student id is required" })}
                />
                <button
                    type="submit"
                    className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default AttendanceForm;
