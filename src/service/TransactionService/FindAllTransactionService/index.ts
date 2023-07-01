import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FindAllTransactionService {
  async findAll(req: Request, res: Response) {

    const transaction = await prisma.transaction.findMany({
      include: {
          wallet: true,
          cryptoCurrency: true,
        },
    });
     return res.status(200).json(transaction);
  }
}
