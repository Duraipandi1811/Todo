import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Server } from "socket.io";
import http from "http";
import rateLimit from "express-rate-limit";
import './authConfig.js'; // will setup passport strategies

import authRoutes from "./routes/auth.js";

import taskRoutes from "./routes/tasks.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  max: 60
}));

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)
app.use("/api/tasks", taskRoutes); //task

// Socket.io
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Attach io to app locals for sharing across routes
app.locals.io = io;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected -->"+process.env.MONGO_URI);
    server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.log(err));
