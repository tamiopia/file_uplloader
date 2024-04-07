"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class File extends sequelize_1.Model {
}
exports.File = File;
File.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fileName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fileSize: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    uploadedDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'File',
    modelName: 'file'
});
