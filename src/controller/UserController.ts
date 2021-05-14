import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

export default class UserController {

  // user login
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing entries. Try again.' });
    }

    try {
      const user = await getRepository(User).findOne({
        where: { email }
      });

      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Incorrect username or password' });
      }

      return res.status(200).json(user);

    } catch (err) {
      res.status(400).send({ error: `Error while loading data: ${err}.` });
    }

  };


  // registers a new user
  async saveUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing entries. Try again.' });
    }

    try {
      const usersRepository = getRepository(User);
      const user = await usersRepository.findOne({
        where: { email }
      });

      if (user) return res.status(400).json({ message: 'Email already exists' });

      const userData = { name, email, password };

      await usersRepository.save(userData);
      res.status(201).json(userData);

    } catch (err) {
      res.status(500).send({ error: `Error while trying to save: ${err}.` });
    }

  };

};