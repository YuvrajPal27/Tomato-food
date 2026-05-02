import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json())
app.use(cors())

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req,res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})