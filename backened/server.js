import connectDB from "./connectDB.js";
import dotenv from "dotenv";
import app from './index.js';

// const app = express();
// app.use(cors());
// app.use(express.json());

dotenv.config({
    path: './.env',
})

// app.get("/", (req, res) => {
//     res.send("Easy Present");
// })

connectDB()
.then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, (req, res) => {
        console.log(`App is listening on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log("error in connetcDB", error);
})