import UserController from '../controllers/UserController.js';
import express from 'express';
import upload from '../middleware/middlewareUploadImage.js';

const router = express.Router();

router.post('/users', upload.single('profile_image'), UserController.createUser);
router.put('/users', upload.single('profile_image'), UserController.updateUser);
router.get('/users', UserController.getUserById);

export default router;