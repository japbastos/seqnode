//import * as Sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import userFactory from "./user";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config.json")[env];

const sequelize = new Sequelize(config.url || process.env.DATABSE_CONNECTION_URI, config);

const db = {
  sequelize,
  Sequelize,
  User: userFactory(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
