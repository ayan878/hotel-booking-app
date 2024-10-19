import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

export type userType = {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

const userSchema = new mongoose.Schema<userType>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const userModel = mongoose.model<userType>("User", userSchema);

export default userModel;
