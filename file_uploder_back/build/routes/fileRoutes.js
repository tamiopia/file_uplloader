"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileControllers_1 = require("../controllers/fileControllers");
const router = (0, express_1.Router)();
router.get('/', fileControllers_1.getFiles);
router.post('/upload', fileControllers_1.uploadFile);
router.delete('/:id', fileControllers_1.deleteFile);
exports.default = router;
