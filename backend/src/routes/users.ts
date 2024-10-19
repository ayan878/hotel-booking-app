import express from "express";
import userRegister from "../controllers/registerController";


const router = express.Router();

router.post("/register", userRegister);

export default router;
