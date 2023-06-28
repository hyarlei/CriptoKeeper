import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateCryptoCurrency {
  async execute(req: Request, res: Response) {
    const { walletId, cryptocurrencyId, quantity, transactionType, dateTime } = req.body;

    // Perform any necessary validation on the input data - Validação de dados

    const transaction = await prisma.transaction.create({
      data: {
        wallet: {
          connect: { id: walletId },
        },
        cryptoCurrency: {
          connect: { id: cryptocurrencyId },
        },
        quantity,
        transactionType,
        dateTime,
      },
    });

    return res.status(201).json(transaction);
  }
}
