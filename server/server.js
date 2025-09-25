import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connect } from "http2";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";


// create Express app and HTTP Server
const app =express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({limit:"4mb"}));
app.use(cors());     // CORS = Cross-Origin Resource Sharing.

// Routes setup
app.use("/api/status", (req,res)=> res.send("Server is live"));
app.use("/api/auth", userRouter)

// connect to mongoDB
await connectDB();


const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`server is running on PORT: ${PORT}`));