"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('file', 'root', 'letmein', {
    host: 'localhost',
    port: 3307, // Specify the port here
    dialect: 'mysql',
    username: 'root',
    password: 'letmein'
});
exports.sequelize = sequelize;
// Test the database connection
function testDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Authenticate with the database
            yield sequelize.authenticate();
            console.log('Connection to the database has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
// Call the function to test the database connection
testDatabaseConnection();
