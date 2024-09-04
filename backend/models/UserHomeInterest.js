import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import User from "./User.js";
import Home from "./Home.js";

const UserHomeInterest = sequelize.define(
  "UserHomeInterest",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      references: {
        model: User,
        key: "username",
      },
    },
    street_address: {
      type: DataTypes.STRING(255),
      references: {
        model: Home,
        key: "street_address",
      },
    },
  },
  {
    tableName: "user_home_interest",
    timestamps: false,
  },
);

// Define associations
User.belongsToMany(Home, { through: UserHomeInterest, foreignKey: "username" });
Home.belongsToMany(User, {
  through: UserHomeInterest,
  foreignKey: "street_address",
});

export default UserHomeInterest;
