"use strict";
// src/controllers/fileController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiles = exports.deleteFile = exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const File_1 = require("../models/File");
// Multer configuration
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage }).single('file');
// Controller functions
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    upload(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return res.status(400).json({ message: 'Error uploading file', error: err });
        }
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No file provided' });
            }
            const { originalname, filename, size } = req.file;
            const uploadedFile = yield File_1.File.create({
                fileName: originalname,
                fileSize: size,
                uploadedDate: new Date()
            });
            return res.status(201).json({
                status: "success",
                data: uploadedFile
            });
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }));
});
exports.uploadFile = uploadFile;
const deleteFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileId = req.params.id;
    try {
        const file = yield File_1.File.findByPk(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }
        // Delete file from storage (optional)
        // fs.unlinkSync('uploads/' + file.filename);
        yield file.destroy();
        return res.status(200).json({ message: 'File deleted successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});
exports.deleteFile = deleteFile;
const getFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield File_1.File.findAll();
        return res.status(200).json({
            status: "success",
            data: files
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});
exports.getFiles = getFiles;
