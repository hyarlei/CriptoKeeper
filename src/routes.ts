import { Router } from 'express';

export const routes = Router();

import { CreateUserController } from './controllers/UserController';

const createUserController = new CreateUserController();

routes.post("/user", createUserController.create);
