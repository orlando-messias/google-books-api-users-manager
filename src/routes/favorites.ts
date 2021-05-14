import { Router } from 'express';
import FavoriteController from '../controller/FavoriteController';

const favoritesRoutes = Router();
const favoriteController = new FavoriteController();

favoritesRoutes.get('/books/user/:id', favoriteController.getFavoritesBooksByUserId);
favoritesRoutes.post('/books/user', favoriteController.setFavoriteBookByUserId);

export default favoritesRoutes;