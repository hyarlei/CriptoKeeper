import { Router } from 'express';

export const routes = Router();

// User
import { CreateUserController } from './controllers/UserController';
import { FindAllUserController } from './controllers/UserController';
import { UpdatedUserController } from './controllers/UserController';
import { DeleteUserController } from './controllers/UserController';

// CryptoCurrency
import { CryptoCurrencyController } from './controllers/CryptoCurrencyController';

// Transaction
import { TransactionController } from './controllers/TransactionController';

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const updatedUserController = new UpdatedUserController();
const deleteUserController = new DeleteUserController();

const cryptoCurrencyController = new CryptoCurrencyController();

const createTransactionController = new TransactionController();

routes.post("/user", createUserController.create);
routes.get("/user", findAllUserController.findAll);
routes.put("/user/:id", updatedUserController.updated);
routes.delete("/user/:id", deleteUserController.delete);

routes.post("/cryptocurrency", cryptoCurrencyController.create);

routes.post("/transaction", createTransactionController.create);
