import { Router } from 'express';

export const routes = Router();

// Middleware
import { AuthMiddleware } from "./middlewares/UserMiddleware";

//Login
import { AuthController } from "./controllers/LoginController";

const authController = new AuthController();

routes.post("/authentic", authController.login);

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
routes.get("/user", AuthMiddleware, findAllUserController.findAll);
routes.put("/user/:id", AuthMiddleware, updatedUserController.updated);
routes.delete("/user/:id", AuthMiddleware, deleteUserController.delete);

// CryptoCurrency
import { CreateCryptoCurrencyController } from './controllers/CryptoCurrencyController';
import { FindAllCryptoCurrencyController } from './controllers/CryptoCurrencyController';
import { UpdateCryptoCurrencyController } from './controllers/CryptoCurrencyController';

const cryptoCurrencyController = new CreateCryptoCurrencyController();
const findAllCryptoCurrencyController = new FindAllCryptoCurrencyController();
const updateCryptoCurrencyController = new UpdateCryptoCurrencyController();

routes.post("/cryptocurrency", AuthMiddleware, cryptoCurrencyController.create);
routes.get("/cryptocurrency", AuthMiddleware, findAllCryptoCurrencyController.findAll);
routes.put("/cryptocurrency/:id", AuthMiddleware, updateCryptoCurrencyController.update);

// Transaction
import { TransactionController } from './controllers/TransactionController';
import { FindAllTransactionController } from './controllers/TransactionController';

const createTransactionController = new TransactionController();
const findAllTransactionController = new FindAllTransactionController();

routes.post("/transaction", AuthMiddleware, createTransactionController.create);
routes.get("/transaction", AuthMiddleware, findAllTransactionController.findAll);

// Wallet
import { FindAllWalletController } from './controllers/WalletController';
import { UpdatedWalletController } from './controllers/WalletController';

const findAllWalletController = new FindAllWalletController();
const updatedWalletController = new UpdatedWalletController();

routes.get("/wallet", AuthMiddleware, findAllWalletController.findAll);
routes.put("/wallet/:id", AuthMiddleware, updatedWalletController.updated);

// BuyCrypto
import { CreateBuyCryptoController } from './controllers/BuyCryptoController';
import { FindAllByCryptoController } from './controllers/BuyCryptoController';

const createBuyCryptoController = new CreateBuyCryptoController();
const findAllSellCryptoService = new FindAllByCryptoController();

routes.post("/buycrypto", AuthMiddleware, createBuyCryptoController.create);
routes.get("/buycrypto", AuthMiddleware, findAllSellCryptoService.findAllByCrypto);

// SellCrypto
import { CreateSellCryptoController } from './controllers/SellCryptoController';
import { FindAllSellCryptoController } from './controllers/SellCryptoController';

const createSellCryptoController = new CreateSellCryptoController();
const findAllBuyCryptoService = new FindAllSellCryptoController();

routes.post("/sellcrypto", AuthMiddleware, createSellCryptoController.create);
routes.get("/sellcrypto", AuthMiddleware, findAllBuyCryptoService.sell);
