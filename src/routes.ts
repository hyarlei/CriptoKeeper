import { Router } from 'express';

export const routes = Router();

// User
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

// CryptoCurrency
import { CryptoCurrencyController } from './controllers/CryptoCurrencyController';

const cryptoCurrencyController = new CryptoCurrencyController();

routes.post("/cryptocurrency", cryptoCurrencyController.create);

// Transaction
import { TransactionController } from './controllers/TransactionController';

const createTransactionController = new TransactionController();

routes.post("/transaction", createTransactionController.create);

// Wallet
import { FindAllWalletController } from './controllers/WalletController';
import { UpdatedWalletController } from './controllers/WalletController';

const findAllWalletController = new FindAllWalletController();
const updatedWalletController = new UpdatedWalletController();

routes.get("/wallet/:id", findAllWalletController.findAll);
routes.put("/wallet/:id", updatedWalletController.updated);
