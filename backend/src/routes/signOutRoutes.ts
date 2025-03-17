import express, { Request, Response } from "express";
import signOutController from "../controllers/signOutController";

const router = express.Router();

router.post("/logout", signOutController);

export default router;
