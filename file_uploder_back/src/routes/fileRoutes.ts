import { Router } from 'express';
import {uploadFile,getFiles,deleteFile}from '../controllers/fileControllers';


const router = Router();

router.get('/', getFiles);
router.post('/upload',uploadFile);
router.delete('/:id', deleteFile);

export default router;
