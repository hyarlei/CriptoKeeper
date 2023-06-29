import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class createTransaction {
  async execute({ cryptocurrencyId, quantity, transactionType, dateTime }, req: Request, res: Response) {

    // Perform any necessary validation on the input data - Validação de dados

    const transaction = await prisma.transaction.create({
      data: {
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
