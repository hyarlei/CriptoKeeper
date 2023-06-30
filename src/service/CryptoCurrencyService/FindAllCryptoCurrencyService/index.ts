import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FindAllCryptoCurrency {
  async execute(req: Request, res: Response) {
    const cryptocurrencies = await prisma.cryptoCurrency.findMany({
      include: {
        Transaction: true,
      },
    });

    return res.status(200).json(cryptocurrencies);
  }
}
