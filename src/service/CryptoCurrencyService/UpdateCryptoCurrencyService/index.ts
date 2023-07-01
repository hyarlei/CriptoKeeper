import { PrismaClient, CryptoCurrency } from '@prisma/client';

const prisma = new PrismaClient();
export class UpdateCryptoCurrency {
  async execute(id: number, name: string, symbol: string, currentValue: number): Promise<CryptoCurrency> {
    return prisma.cryptoCurrency.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        symbol: symbol,

        currentValue: currentValue,
      },
    });
  }
}

