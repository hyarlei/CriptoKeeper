import { Request, Response } from "express";
import { GetWalletById } from "../service/WalletService/GetWalletById";
import { UpdateWalletBalance } from "../service/WalletService/UpdateWalletBalance";

export class FindAllWalletController {
  async findAll(req: Request, res: Response) {
    const { id } = req.body;

    const getWalletById = new GetWalletById();

    const wallet = await getWalletById.getWalletById(Number(id));

    return wallet;
  }
}

export class UpdatedWalletController {
  async updated(req: Request, res: Response) {
    const { id } = req.params;
    const { balance } = req.body;

    const updateWalletBalance = new UpdateWalletBalance();

    const wallet = await updateWalletBalance.updateWalletBalance(
      Number(id),
      Number(balance)
    );

    return wallet;
  }
}
