import { PrismaClient, Wallet } from '@prisma/client';

const prisma = new PrismaClient();

export class GetWalletById {
  async getWalletById(walletId: number) {
    return prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    });
  }
}
