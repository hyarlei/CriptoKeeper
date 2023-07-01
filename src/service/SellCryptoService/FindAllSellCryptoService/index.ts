import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FindAllSellCryptoService {
  async findAll(req: Request, res: Response) {
    const sellCrypto = await prisma.transaction.findMany({
      include: {
        cryptoCurrency: true,
      },
    });

    return sellCrypto;
  }
}
