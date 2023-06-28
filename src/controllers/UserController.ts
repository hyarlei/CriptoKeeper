import { Request, Response } from "express";
import { CreateUserService } from "../service/UserService/CreateUserService";
import { FindAllUserService } from "../service/UserService/FindAllUserService";
import { UpdatedUserService } from "../service/UserService/UpdatedUserService";
import { DeleteUserService } from "../service/UserService/DeleteUserService";

export class CreateUserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password }, req, res);
    return user;
  }
}

export class FindAllUserController {
  async findAll(req: Request, res: Response) {
    const findAllUserService = new FindAllUserService();

    const user = await findAllUserService.execute(req, res);
    return user;
  }
}

export class UpdatedUserController {
  async updated(req: Request, res: Response) {

    const updatedUserService = new UpdatedUserService();

    const user = await updatedUserService.execute(req, res);
    return user;
  }
}

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute(
      { id: Number(id) },
      req,
      res
    );
    return user;
  }
}
