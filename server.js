import express from "express";
import dotenv from  "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js"

const app = express();
dotenv.config();
// middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use("/api/v1/auth", authRoutes)

connectDB();

app.get("/", (req, res)=>{
    res.send('I am up and running');
})


const PORT = process.env.PORT || 8080;
const dev = process.env.DEV_MODE

app.listen(PORT, ()=>{
    console.log(`I am running on port ${PORT} in ${dev} mode`.bgCyan.white)
}
)