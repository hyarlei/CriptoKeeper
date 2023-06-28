import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class createTransaction {
  async execute(req: Request, res: Response) {
    const { name, symbol, currentValue } = req.body;

    // Perform any necessary validation on the input data - Validação de dados

    const cryptocurrency = await prisma.cryptoCurrency.create({
      data: {
        name,
        symbol,
        currentValue,
      },
    });

    return res.status(201).json(cryptocurrency);
  }
}
