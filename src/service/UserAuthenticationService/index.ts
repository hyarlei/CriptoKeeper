import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

interface IUser {
  id: number;
  password: string;
}

export class UserAuthenticationService {
  async execute({id, password}: IUser,
    req: Request, res: Response, next: NextFunction ) {

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: 'User not found',
      });
    }

    if(password !== user.password)res.status(400).json({ error: 'Password not match' });

    const token = sign({
        id: user.id,
        password: user.password,
      },
      'secret',
      {
        expiresIn: '1d',
      },
    );

    return res.json({ token });
  }
}
