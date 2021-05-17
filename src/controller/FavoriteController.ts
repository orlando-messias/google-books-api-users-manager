import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import FavoriteBook from '../models/FavoriteBook';

export default class FavoriteController {


  // list all favorites books by user id
  async getFavoritesBooksByUserId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const favoriteBookRepo = getRepository(FavoriteBook);
      const favorites = await favoriteBookRepo.find({
        where: { userId: id }
      });
      return res.status(200).json(favorites);

    } catch (err) {
      res.status(400).send({ error: `Error while loading data: ${err}.` });
    }
  };


  // set favorite or not favorite to a book by user
  async setFavoriteBookByUserId(req: Request, res: Response) {
    const {
      userId,
      bookId,
      title,
      description,
      thumbnail,
      language,
      publishedDate,
      pageCount } = req.body;

      console.log(req.body);

    try {
      const favoriteBookRepo = getRepository(FavoriteBook);
      const favorite = await favoriteBookRepo.findOne({
        where: { userId, bookId }
      });
      if (!favorite) {
        await favoriteBookRepo.save({
          userId,
          bookId,
          title,
          description,
          thumbnail,
          language,
          publishedDate,
          pageCount
        });
        return res.status(201).json({ action: 'inserted' });
      }

      await favoriteBookRepo.remove(favorite);
      return res.status(200).json({ action: 'removed' });

    } catch (err) {
      res.status(400).send({ error: `Error while accessing data: ${err}.` });
    }
  };

};