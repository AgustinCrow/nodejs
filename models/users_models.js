import { sequelize } from "../database/config.js";
import Datatypes from "sequelize";

export const User = sequelize.define('users', {
    name: {
        type: Datatypes.STRING(30),
        unique: true,
        allowNull: false,

    },
    email: {
        type: Datatypes.STRING(45),
        unique: true,
        allowNull: false,

    }
}
)