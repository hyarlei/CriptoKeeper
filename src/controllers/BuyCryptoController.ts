import { Request, Response } from "express";
import { CreateBuyCryptoService } from "../service/BuyCryptoService/CreateBuyCryptoService";

export class CreateBuyCryptoController {
  async create(req: Request, res: Response) {
    const { cryptoCurrencyId, quantity, walletId } = req.body;

    const createBuyCrypto = new CreateBuyCryptoService();

    const buyCrypto = await createBuyCrypto.execute(
      { cryptoCurrencyId, quantity, walletId },
      req,
      res
    );
    return buyCrypto;
  }
}
