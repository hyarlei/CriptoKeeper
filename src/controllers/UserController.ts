import { Request, Response } from "express";
import { CreateUserService } from "../service/UserService/CreateUserService";
import { FindAllUserService } from "../service/UserService/FindAllUserService";
import { UpdatedUserService } from "../service/UserService/UpdatedUserService";
import { DeleteUserService } from "../service/UserService/DeleteUserService";

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

export class FindAllUserController {
  async findAll(req: Request, res: Response) {
    const findAllUserService = new FindAllUserService();

    try {
      const users = await findAllUserService.execute(req, res);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao buscar usuários" });
    }
  }
}

export class UpdatedUserController {
  async updated(req: Request, res: Response) {

    const updatedUserService = new UpdatedUserService();

    try {
      const user = await updatedUserService.execute(req, res);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao atualizar usuário" });
    }
  }
}

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService();

    try {
      const user = await deleteUserService.execute(
        { id: Number(id) },
        req,
        res
      );
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao deletar usuário" });
    }
  }
}
