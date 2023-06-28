import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface IUser{
  id: number;
}

export class DeleteUserService {
  async execute({id}: IUser, req: Request, res: Response) {

    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
