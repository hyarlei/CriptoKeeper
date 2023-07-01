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

    // Check if the user exists - Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: walletId },
    });

    // Check if the crypto currency exists - Verificar se o cripto é válido
    const cryptoCurrency = await prisma.cryptoCurrency.findUnique({
      where: { id: cryptoCurrencyId },
    });
    if (!cryptoCurrency) {
      return res.status(404).json({
        message: 'Crypto currency not found',
      });
    }

    // Check if the quantity is valid - Verificar se a quantidade é válida
    if (quantity <= 0) {
      return res.status(400).json({
        message: 'Invalid quantity',
      });
    }

    const currentCryptoCurrency = await prisma.cryptoCurrency.findUnique({
      where: {
        id: cryptoCurrencyId,
      },
    });

    if (!currentCryptoCurrency) {
      return res.status(404).json({ message: "CryptoCurrency not found" });
    }

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
