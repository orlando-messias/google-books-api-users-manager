import express from 'express';
import cors from 'cors';

import { connection } from './config/db';
import usersRoute from './routes/users';
import favoritesRoutes from './routes/favorites';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('This is Google Books API');
});

app.use('/users', usersRoute);
app.use('/favorites', favoritesRoutes);

connection();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});