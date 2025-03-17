import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Ensure this file is treated as a module to extend global types
export {};

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Optional to prevent TypeScript errors when not assigned
    }
  }
}

const authenticate = async(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    // Get token from cookies
    const token = req.cookies?.auth_token;

    // Check if token is missing
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is required" });
    }

    // Verify the token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as JwtPayload;

    // Attach userId to request object
    req.userId = decoded.userId;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticate;
