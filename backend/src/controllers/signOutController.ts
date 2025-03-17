import { Request, Response } from "express";

const signOutController = async (req: Request, res: Response) => {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export default signOutController;