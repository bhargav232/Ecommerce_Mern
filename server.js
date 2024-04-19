import express from "express";
import dotenv from  "dotenv";
import color from "colors";
import connectDB from "./config/db.js";
import morgan from "morgan";
const app = express();
dotenv.config();
// middlewares
app.use(morgan('dev'));
app.use(express.json())

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