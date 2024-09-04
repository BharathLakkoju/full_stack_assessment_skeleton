import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "user",
    timestamps: false,
  },
);

export default User;
