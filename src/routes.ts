import { Router } from 'express';

export const routes = Router();

import { CreateUserController } from './controllers/UserController';
import { FindAllUserController } from './controllers/UserController';
import { UpdatedUserController } from './controllers/UserController';
import { DeleteUserController } from './controllers/UserController';

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const updatedUserController = new UpdatedUserController();
const deleteUserController = new DeleteUserController();

routes.post("/user", createUserController.create);
routes.get("/user", findAllUserController.findAll);
routes.put("/user/:id", updatedUserController.updated);
routes.delete("/user/:id", deleteUserController.delete);
