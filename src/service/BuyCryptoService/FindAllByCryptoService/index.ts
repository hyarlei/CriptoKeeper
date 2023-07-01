import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FindAllByCryptoService {
  async findAll(req: Request, res: Response) {
    const { cryptoCurrencyId } = req.body;

    const findAllByCryptoService = await prisma.transaction.findMany({
      where: {
        cryptocurrencyId: cryptoCurrencyId,
      },
    });

    return findAllByCryptoService;
  }
}
