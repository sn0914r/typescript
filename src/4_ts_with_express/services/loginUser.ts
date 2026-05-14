import { UserDoc, UserModel } from "../models/User.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function loginUser(
  username: string,
  password: string,
): Promise<string> {
  const user: UserDoc | null = await UserModel.findOne({ username });

  if (!user) {
    throw new Error("User doesn't exist");
  }

  const isPasswordMatched: boolean = await bcrypt.compare(
    password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new Error("Passwords didn't match");
  }

  const token: string = jwt.sign(
    {
      id: user._id,
      username: user.username,
      role: user.role,
    },
    "TIGOR",
    { expiresIn: "1hr" },
  );

  return token;
}
