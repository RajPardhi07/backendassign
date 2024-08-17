
import express from 'express'
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import connectDB from './config/db.js';
import memberRoutes from './routes/memberRoutes.js';
import cors from 'cors'


dotenv.config();

connectDB();



const app = express();


app.use(cors())
app.use(express.json())


app.use("/api/auth", authRoutes);
app.use("/api/member", memberRoutes);


const PORT = process.env.PORT || 3000;

// RUN Listen
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})
