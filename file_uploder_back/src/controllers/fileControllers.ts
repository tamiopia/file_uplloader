// src/controllers/fileController.ts

import { Request, Response } from 'express';
import multer from 'multer';
import { File } from '../models/File';

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage }).single('file');

// Controller functions
export const uploadFile = async (req: Request, res: Response) => {
  upload(req, res, async (err: any) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading file', error: err });
    }
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file provided' });
      }
      const { originalname, filename, size } = req.file;
      const uploadedFile = await File.create({
        fileName: originalname,
        fileSize: size,
        uploadedDate: new Date()
      });
      return res.status(201).json({
        status:"success",
        data:uploadedFile
      });
    } catch (error:any) {
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
};

export const deleteFile = async (req: Request, res: Response) => {
  const fileId = req.params.id;
  try {
    const file = await File.findByPk(fileId);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    // Delete file from storage (optional)
    // fs.unlinkSync('uploads/' + file.filename);

    await file.destroy();
    return res.status(200).json({ message: 'File deleted successfully' });
  } catch (error:any) {
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await File.findAll();
    return res.status(200).json({
      status:"success",
      data:files});
  } catch (error:any) {
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
