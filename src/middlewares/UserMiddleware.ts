import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface UserMiddleware {
  id: number;
  iat: number;
  exp: number;
}

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token is missing" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, "secret");

    const { id } = decoded as UserMiddleware;

    if (id) {
      throw new Error("Unauthorized");
    }
  return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
}
