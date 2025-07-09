import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import courseRoutes from "./routes/course.routes.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});