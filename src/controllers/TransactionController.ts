import { Request, Response } from "express";
import { createTransaction } from "../service/TransactionService/CreateTransactionService";

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
