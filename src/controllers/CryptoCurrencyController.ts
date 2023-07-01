import { Request, Response } from "express";
import { CreateCryptoCurrency } from "../service/CryptoCurrencyService/CreateCryptoCurrencyService";
import { FindAllCryptoCurrency } from "../service/CryptoCurrencyService/FindAllCryptoCurrencyService";
import { UpdateCryptoCurrency } from "../service/CryptoCurrencyService/UpdateCryptoCurrencyService";

export class CreateCryptoCurrencyController {
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

export class FindAllCryptoCurrencyController {
  async findAll(req: Request, res: Response) {
    const findAllCryptoCurrency = new FindAllCryptoCurrency();
    
    const cryptoCurrency = await findAllCryptoCurrency.execute(req, res);

    return cryptoCurrency;
  }
}

export class UpdateCryptoCurrencyController {
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, symbol, currentValue } = req.body;

    const updateCryptoCurrency = new UpdateCryptoCurrency();
    const cryptoCurrency = await updateCryptoCurrency.execute(
      Number(id),
      String(name),
      String(symbol),
      Number(currentValue)
    );

    return cryptoCurrency;
  }
}
