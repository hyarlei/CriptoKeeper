import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateBuyCryptoService {
  async execute({ cryptoCurrencyId, quantity, walletId }, req: Request, res: Response) {

    // Check if the user exists - Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: walletId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
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

    const wallet = await prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    });

    // Criar a transação de compra
    const buyCrypto = await prisma.transaction.create({
      data: {
        quantity,
        transactionType: "buy",
        dateTime: new Date(),
        wallet: {
          connect: { id: walletId },
        },
        cryptoCurrency: {
          connect: { id: currentCryptoCurrency.id },
        },
      },
      include: {
        wallet: true,
        cryptoCurrency: true,
      },
    });

    // Atualizar o saldo da carteira do usuário
    await prisma.wallet.update({
      where: { id: walletId },
      data: {
        balance: wallet.balance - currentCryptoCurrency.currentValue * quantity,
      },
    });

    return res.status(201).json(buyCrypto);
  }
}
