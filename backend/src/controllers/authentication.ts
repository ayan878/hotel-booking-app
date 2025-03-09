import { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authentication = async (req: Request, res: Response):Promise<any> => {
  try {
    const { email, password } = req.body;

    // Validate that email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // If user doesn't exist, send a 404 response
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is invalid, return a 401 response
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    // Respond with the token
    return res.status(200).json({
      message: "Authentication successful",
      userId: user._id,
    });
  } catch (error) {
    console.error("Error in authentication:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default authentication;
