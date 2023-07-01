import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createTransaction } from "../service/TransactionService/CreateTransactionService";
import { FindAllTransactionService } from "../service/TransactionService/FindAllTransactionService";

const prisma = new PrismaClient();
export class TransactionController {
  async create(req: Request, res: Response) {
    const { cryptocurrencyId, quantity, transactionType, dateTime } = req.body;

    const createTransactionService = new createTransaction();

    const transaction = await createTransactionService.execute(
      { cryptocurrencyId, quantity, transactionType, dateTime },
      req,
      res
    );

    return transaction;
  }
}

export class FindAllTransactionController {
  async findAll(req: Request, res: Response) {
    const { id } = req.params;

    const findAllTransaction = new FindAllTransactionService();

    const transaction = await findAllTransaction.findAll(req, res);

    return transaction;
  }
}
