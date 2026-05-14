import { Schema, model, Document } from "mongoose";

export interface UserDoc {
  _id?: any;
  username: string;
  password: string;
  role: "ADMIN" | "USER";
}

const UserSchema = new Schema<UserDoc>({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
});

export const UserModel = model<UserDoc>("User", UserSchema);
