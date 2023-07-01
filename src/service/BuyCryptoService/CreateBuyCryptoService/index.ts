import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateBuyCryptoService {
  async execute(
    { cryptoCurrencyId, quantity, walletId },
    req: Request,
    res: Response
  ) {
    // Perform any necessary validation on the input data - Validação de dados

    const currentCryptoCurrency = await prisma.cryptoCurrency.findUnique({
      where: {
        id: cryptoCurrencyId,
      },
    });

    const buyCrypto = await prisma.transaction.create({
      data: {
        quantity,
        transactionType: "buy",
        dateTime: new Date(),

        wallet: {
          connect: { id: walletId },
        },
        cryptoCurrency: {
          connect: { id: cryptoCurrencyId },
        },
      },
    });

    const wallet = await prisma.wallet.update({
      where: {
        id: walletId,
      },
      data: {
        balance: {
          decrement: buyCrypto.quantity * currentCryptoCurrency.currentValue,
        },
        transactions: {
          connect: { id: buyCrypto.id },
        },
      },
    });

    return res.status(201).json(buyCrypto);
  }
}
