import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Define the User type, extending Document for Mongoose document typing
export type Usertype = Document & {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

// Define the User Schema
const userSchema = new Schema<Usertype>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// Pre-save middleware for hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

// Create the User model
export const User = mongoose.model<Usertype>("User", userSchema);
