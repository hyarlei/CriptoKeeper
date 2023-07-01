import { Request, Response } from "express";
import { SellCryptoService } from "../service/SellCryptoService/CreateSellCryptoService";

export class CreateSellCryptoController {
  async create(req: Request, res: Response) {
    const { user, cryptoCurrencyId, quantity } = req.body;

    const sellCryptoService = new SellCryptoService();

    const sellCrypto = await sellCryptoService.execute({ user, cryptoCurrencyId, quantity }, req, res);

    return sellCrypto;
  }
}

export class FindAllSellCryptoController {
  async sell(req: Request, res: Response) {
    const { user, cryptoCurrencyId, quantity } = req.body;

    const sellCryptoService = new SellCryptoService();

    const sellCrypto = await sellCryptoService.execute({ user, cryptoCurrencyId, quantity }, req, res);

    return sellCrypto;
  }
}
