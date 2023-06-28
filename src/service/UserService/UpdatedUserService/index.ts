import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UpdatedUserService {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(200).json(user);
  }
}
