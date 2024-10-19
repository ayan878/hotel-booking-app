import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  userRoutes from "./routes/users"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:3000`);
    });
  })
  .catch((error) => {
    console.log("error:", error);
  });

app.use("/api/users",userRoutes)
