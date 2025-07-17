import { DataTypes, Model, InferCreationAttributes, InferAttributes, CreationOptional } from "sequelize";
import db from "../db/connection";

export class MessageType extends Model<InferAttributes<MessageType>, InferCreationAttributes<MessageType>> {
  declare id?: CreationOptional<number>;
  declare name: string;
  declare created_at?: CreationOptional<Date>;
  declare updated_at?: CreationOptional<Date>;
}

MessageType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
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
    modelName: "message",
    tableName: "messages",
    timestamps: true,
    underscored: true,
  }
);

export type MessageAttributes = InferAttributes<MessageType>;
export type MessageCreationAttributes = InferCreationAttributes<MessageType>;
