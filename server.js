import express from "express";
import dotenv from  "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoute.js"
import cors from "cors";


const app = express();
dotenv.config();

// middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


// Use authRoutes with prefix


// Your non-prefixed routes
app.get("/", (req,res)=>{
    res.send("I am up and running!")
})

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",  productRoutes);


connectDB();

const PORT = process.env.PORT || 8080;
const dev = process.env.DEV_MODE;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT} in ${dev} mode`.bgCyan.white);
});
