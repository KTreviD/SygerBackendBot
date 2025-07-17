import { DataTypes, Model, InferCreationAttributes, InferAttributes, CreationOptional } from "sequelize";
import db from "../db/connection";

export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
  declare id?: CreationOptional<number>;
  declare user_id: number;
  declare is_user: boolean;
  declare message: string;
  declare message_type_id: number;
  declare created_at?: CreationOptional<Date>;
  declare updated_at?: CreationOptional<Date>;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    message_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "message",
    tableName: "messages",
    timestamps: false,
    underscored: true,
  }
);

export type MessageAttributes = InferAttributes<Message>;
export type MessageCreationAttributes = InferCreationAttributes<Message>;
