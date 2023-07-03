import { PrismaClient, Wallet } from '@prisma/client';

const prisma = new PrismaClient();

export class GetWalletById {

  async getWalletById(walletId: number): Promise<Wallet> {
    const wallet = await prisma.wallet.findUnique({
      where: { id: walletId },
      include: {
        transactions: true,
      },
    });

    return wallet;
  }
}
