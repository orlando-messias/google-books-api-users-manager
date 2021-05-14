import * as dotenv from 'dotenv';

dotenv.config();

import { createConnection } from 'typeorm';

export const connection = async () => {
  const conn = await createConnection();

  console.log(`Connected to usersDB`);
};