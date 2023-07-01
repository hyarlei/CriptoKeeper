import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SellCryptoService {
  async execute({ cryptoCurrencyId, quantity, walletId }: any, req: Request, res: Response) {
    // Perform any necessary validation on the input data

    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: walletId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verificar se a moeda criptografada existe
    const cryptoCurrency = await prisma.cryptoCurrency.findUnique({
      where: { id: cryptoCurrencyId },
    });

    if (!cryptoCurrency) {
      return res.status(404).json({ message: "Crypto currency not found" });
    }

    // Verificar se o usuário possui a quantidade suficiente da moeda criptografada para a venda
    const wallet = await prisma.wallet.findFirst({
      include: { transactions: true },
    });

    const cryptoTransactions = wallet.transactions.filter((transaction) => {
      return transaction.cryptocurrencyId === cryptoCurrencyId && transaction.transactionType === "buy";
    });

    const totalCryptoQuantity = cryptoTransactions.reduce((total, transaction) => {
      return total + transaction.quantity;
    }, 0);

    if (totalCryptoQuantity < quantity) {
      return res.status(400).json({ message: "Insufficient crypto quantity" });
    }

    // Criar a transação de venda
    const transaction = await prisma.transaction.create({
      data: {
        quantity,
        transactionType: "sell",
        dateTime: new Date(),
        wallet: {
          connect: { id: wallet.id },
        },
        cryptoCurrency: {
          connect: { id: cryptoCurrencyId },
        },
      },
    });

    // Atualizar o saldo da carteira do usuário
    await prisma.wallet.update({
      where: { id: wallet.id },
      data: {
        balance: wallet.balance + cryptoCurrency.currentValue * quantity,
        transactions: {
          connect: { id: transaction.id },
        },
      },
    });

    return res.status(201).json(transaction);
  }
}
