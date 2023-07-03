import { Request, Response } from "express";
import { SellCryptoService } from "../service/SellCryptoService/CreateSellCryptoService";

export class CreateSellCryptoController {
  async create(req: Request, res: Response) {
    const { cryptoCurrencyId, quantity, walletId } = req.body;

    const sellCryptoService = new SellCryptoService();

    const sellCrypto = await sellCryptoService.execute({ cryptoCurrencyId, quantity, walletId }, req, res);

    return sellCrypto;
  }
}

export class FindAllSellCryptoController {
  async sell(req: Request, res: Response) {
    const { cryptoCurrencyId, quantity, walletId } = req.body;

    const sellCryptoService = new SellCryptoService();

    const sellCrypto = await sellCryptoService.execute({ cryptoCurrencyId, quantity, walletId }, req, res);

    return sellCrypto;
  }
}
