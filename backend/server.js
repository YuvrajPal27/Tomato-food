import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./Routes/FoodRoute.js";

// Load environment variables

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json())
app.use(cors())

//db connection
await connectDB();

//API Endpoint
app.use("/api/food", foodRouter)

app.get("/", (req,res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
