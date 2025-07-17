import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

// Force Decimal Types to be returned as Number instead of String
(Sequelize as any).DataTypes.postgres.DECIMAL.parse = parseFloat;

const db: any = new Sequelize(process.env.DATABASE_URL as string, {
  // logging: process.env.DATABASE_LOGGING?.toLowerCase() === 'true' ? console.log : false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default db;
