import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FindAllUserService {
  async execute(req: Request, res: Response) {
    const users = await prisma.user.findMany({
      include: {
        wallet:{
          include: {
            transactions: true,
          }
        }
      },
    });

    return res.status(200).json(users);
  }
}
