import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import router from "./routes/hello";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = parseInt(process.env.PORT || "3000", 10);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);

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
