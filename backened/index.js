import express from 'express';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
})

//import routes
import attendanceRouter from "./Routes/Attendance.routes.js";

//routes declaration
app.use("/api/v1", attendanceRouter);

export default app;