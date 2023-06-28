import { PrismaClient, Wallet } from '@prisma/client';

const prisma = new PrismaClient();

export class UpdateWalletBalance {
  async updateWalletBalance(walletId: number, newBalance: number): Promise<Wallet> {
    return prisma.wallet.update({
      where: {
        id: walletId,
      },
      data: {
        balance: newBalance,
      },
    });
  }
}
