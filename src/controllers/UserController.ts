import { Request, Response } from "express";
import { CreateUserService } from "../service/UserService/CreateUserService";

export class CreateUserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({ name, email, password }, req, res);
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar usuário" });
    }
  }
}
