import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import userRoutes from "./routes/userRoute";
import loginRoutes from "./routes/loginRoute";
import authRoutes from "./routes/auth";
import signOutRoutes from "./routes/signOutRoutes";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: (process.env.FRONTEND_URL as string) || "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

const port = parseInt(process.env.PORT || "3000", 10);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/users", userRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", signOutRoutes);



const mongo_uri = process.env.MONGODB_CONNECTION_STRING as string;
mongoose
  .connect(mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
      console.log(`SwaggerUI is running on http://localhost:${port}/api-docs/`);
      console.log(process.env.MONGODB_CONNECTION_STRING as string); // it is for end to end test


    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
