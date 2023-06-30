import { Request, Response } from "express";
import { GetWalletById } from "../service/WalletService/GetWalletById";
import { UpdateWalletBalance } from "../service/WalletService/UpdateWalletBalance";

export class FindAllWalletController {
  async findAll(request: Request, response: Response) {
    const { id } = request.params;

    const getWalletById = new GetWalletById();

    const wallet = await getWalletById.getWalletById(Number(id));

    return response.json(wallet);
  }
}

export class UpdatedWalletController {
  async updated(request: Request, response: Response) {
    const { id } = request.params;
    const { balance } = request.body;

    const updateWalletBalance = new UpdateWalletBalance();
    const wallet = await updateWalletBalance.updateWalletBalance(
      Number(id),
      Number(balance)
    );

    return response.json(wallet);
  }
}
