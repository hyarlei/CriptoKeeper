import { Request, Response } from "express";
import { CreateCryptoCurrency } from "../service/CryptoCurrencyService/CreateCryptoCurrencyService";

export class CryptoCurrencyController {
  async create(req: Request, res: Response) {
    const { name, symbol, currentValue } = req.body;

    const createCryptoCurrency = new CreateCryptoCurrency();
    const cryptoCurrency = await createCryptoCurrency.execute(
      { name, symbol, currentValue },
      req,
      res,
    );

    return cryptoCurrency;
  }
}
