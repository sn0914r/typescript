import jwt from "jsonwebtoken";
import { UserModel, UserDoc } from "../models/User.model";
import bcrypt from "bcryptjs";

export async function createUser(
  username: string,
  password: string,
): Promise<string> {
  const isExists: UserDoc | null = await UserModel.findOne({ username });

  if (isExists) {
    throw new Error("User already exists");
  }

  const hashedPassword: string = await bcrypt.hash(password, 10);

  const newUser: UserDoc = await UserModel.create({
    username,
    password: hashedPassword,
  });

  const token: string = jwt.sign(
    {
      id: newUser._id,
      username: newUser.username,
      role: newUser.role,
    },
    "TIGOR",
    { expiresIn: "1h" },
  );

  return token;
}