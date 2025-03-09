import { Request, Response } from "express";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response): Promise<any> => {
  
  try {
    const { email, password, firstName, lastName } = req.body;
    
    // Validate input (basic validation example)
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user (password will be hashed automatically in the pre-save middleware)
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
    });

    // Save the user to the database
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    // Respond with success
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default register;
