"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`connected sucssefuly on ${port}`);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/files', fileRoutes_1.default);
