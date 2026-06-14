import EducationController from '../controllers/EducationController.js';
import { Router } from 'express';

const router = Router();

router.post('/education', EducationController.addEducation);
router.put('/education', EducationController.updateEducation);
router.get('/education', EducationController.getAlleducation);

export default router;