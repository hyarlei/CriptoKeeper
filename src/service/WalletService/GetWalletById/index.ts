import { PrismaClient, Wallet } from '@prisma/client';

const prisma = new PrismaClient();

export class getWalletById {
  async getWalletById(walletId: number): Promise<Wallet> {
    return prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    });
  }
}
