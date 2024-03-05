import Sequelize from 'sequelize';
import { PORT, DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } from '../config.js';

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: PORT,
    dialect:'mysql'
  });