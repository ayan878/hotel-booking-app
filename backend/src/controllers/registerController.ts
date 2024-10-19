import { Request, Response } from "express";
import userModel from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userRegister = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });
    await newUser.save();

    const token = jwt.sign(
      { email: newUser.email },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );
    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 864000000,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default userRegister;
