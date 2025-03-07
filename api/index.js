import express from "express";
import AuthRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import UserRouter from './routes/userRoutes.js';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware to disable caching
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    next();
});

app.use('/api/auth', AuthRoutes);
app.use('/api/user', UserRouter);

app.listen(3000, () => console.log("Server started on port 3000"));

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});
