import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class deleteWallet {
  async deleteWallet(walletId: number): Promise<void> {
    await prisma.wallet.delete({
      where: {
        id: walletId,
      },
    });
  }
}
