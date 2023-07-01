import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from "express";
import { UserAuthenticationService } from '../service/UserAuthenticationService/index'

const prisma = new PrismaClient();

interface IUser {
  id: number;
  password: string;
}

export class AuthController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, password}: IUser = req.body;

    const userAuthenticationService = new UserAuthenticationService();

    const user = await userAuthenticationService.execute(
      { id, password },
      req,
      res,
      next
    );

    return user;
  }
}
