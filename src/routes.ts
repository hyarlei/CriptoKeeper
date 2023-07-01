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
import { CreateCryptoCurrencyController } from './controllers/CryptoCurrencyController';
import { FindAllCryptoCurrencyController } from './controllers/CryptoCurrencyController';
import { UpdateCryptoCurrencyController } from './controllers/CryptoCurrencyController';

const cryptoCurrencyController = new CreateCryptoCurrencyController();
const findAllCryptoCurrencyController = new FindAllCryptoCurrencyController();
const updateCryptoCurrencyController = new UpdateCryptoCurrencyController();

routes.post("/cryptocurrency", cryptoCurrencyController.create);
routes.get("/cryptocurrency", findAllCryptoCurrencyController.findAll);
routes.put("/cryptocurrency/:id", updateCryptoCurrencyController.update);

// Transaction
import { TransactionController } from './controllers/TransactionController';
import { FindAllTransactionController } from './controllers/TransactionController';

const createTransactionController = new TransactionController();
const findAllTransactionController = new FindAllTransactionController();

routes.post("/transaction", createTransactionController.create);
routes.get("/transaction", findAllTransactionController.findAll);

// Wallet
import { FindAllWalletController } from './controllers/WalletController';
import { UpdatedWalletController } from './controllers/WalletController';

const findAllWalletController = new FindAllWalletController();
const updatedWalletController = new UpdatedWalletController();

routes.get("/wallet/:id", findAllWalletController.findAll);
routes.put("/wallet/:id", updatedWalletController.updated);

// BuyCrypto
import { CreateBuyCryptoController } from './controllers/BuyCryptoController';

const createBuyCryptoController = new CreateBuyCryptoController();

routes.post("/buycrypto", createBuyCryptoController.create);
