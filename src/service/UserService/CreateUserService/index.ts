import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class CreateUserService {
  async execute({ name, email, password}, req: Request, res: Response) {

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Preencha todos os campos" });
    }

    const emailExiste = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExiste) {
      return res.status(400).json({ message: "Email já existe" });
    }

    //const hashedPassword = await bcrypt.hash(password, 10); // Aplicar hash na senha


    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        wallet: {
          create: {
            balance: 0,
            transactions: {
              create: {
                quantity: 0,
                transactionType: "buy",
                dateTime: new Date(),
              },
            },
          },
        },
      },
      include: {
        wallet: true,
      },
    });


    return res.status(201).json(user);
  }
}
