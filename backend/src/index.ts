import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from 'morgan'
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

import hello from "./routes/hello";


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

const port = parseInt(process.env.PORT || "3000", 10);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/auth',authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/users/',hello);



const mongo_uri = process.env.MONGO_URI as string;
mongoose
  .connect(mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
      console.log(`SwaggerUI is running on http://localhost:${port}/api-docs/`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
