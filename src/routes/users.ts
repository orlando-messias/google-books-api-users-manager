import { Router } from 'express';
import UserController from '../controller/UserController';

const usersRoute = Router();
const userController = new UserController();

usersRoute.post('/login', userController.login);
usersRoute.post('/save', userController.saveUser);
usersRoute.get('/:id', userController.getUserById);
usersRoute.put('/:id', userController.updateUser);

export default usersRoute;