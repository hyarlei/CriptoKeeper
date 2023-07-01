import { Request, Response } from "express";
import { CreateBuyCryptoService } from "../service/BuyCryptoService/CreateBuyCryptoService";
import { FindAllByCryptoService } from "../service/BuyCryptoService/FindAllByCryptoService";

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

export class FindAllByCryptoController {
  async findAllByCrypto(req: Request, res: Response) {

    const findAllByCrypto = new FindAllByCryptoService();

    const buyCrypto = await findAllByCrypto.findAll(//{ cryptoCurrencyId },
      req,
      res
    );

    return buyCrypto;
  }
}
