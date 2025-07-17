import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import db from "../db/connection";

export class UselessMessage extends Model<InferAttributes<UselessMessage>, InferCreationAttributes<UselessMessage>> {
  declare id: CreationOptional<number>;
  declare user_message_id: number;
  declare bot_message_id: number;
  declare second_user_message_id: number;
  declare second_bot_message_id: number;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}

UselessMessage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bot_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second_user_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second_bot_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db,
    tableName: "useless_messages",
    modelName: "uselessMessage",
    timestamps: false,
    underscored: true,
  }
);

export type UselessMessageAttributes = InferAttributes<UselessMessage>;
export type UselessMessageCreationAttributes = InferCreationAttributes<UselessMessage>;
