import { Model, DataTypes, Sequelize, BuildOptions } from 'sequelize';
//import {  } from 'sequelize-typescript';

interface User extends Model {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): User;
}

export default (sequelize: Sequelize) => {
  const User = sequelize.define<User>(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  ) as UserStatic;

  return User;
};

