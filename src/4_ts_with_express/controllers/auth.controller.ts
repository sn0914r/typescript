import { Request, Response } from "express";
import { createUser } from "../services/createUser";
import { loginUser } from "../services/loginUser";

interface UserCredentials {
  username: string;
  password: string;
}

interface AuthTokenResponse {
  success: boolean;
  data: {
    accessToken: string;
  };
}

export async function RegisterController(
  req: Request<{}, {}, UserCredentials>,
  res: Response<AuthTokenResponse>,
): Promise<void> {
  const { username, password } = req.body;

  const token: string = await createUser(username, password);

  res.json({
    success: true,
    data: { accessToken: token },
  });
}

export async function LoginController(
  req: Request<{}, {}, UserCredentials>,
  res: Response<AuthTokenResponse>,
): Promise<void> {
  const { username, password } = req.body;

  const token: string = await loginUser(username, password);

  res.status(200).json({
    success: true,
    data: {
      accessToken: token,
    },
  });
}
