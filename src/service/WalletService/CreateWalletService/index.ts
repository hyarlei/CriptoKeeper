import { PrismaClient, Wallet } from '@prisma/client';

const prisma = new PrismaClient();

export class WalletService {
  async createWallet(userId: number, balance: number): Promise<Wallet> {
    return prisma.wallet.create({
      data: {
        balance,
        transactions: {
        },
      },
    });
  }
}
