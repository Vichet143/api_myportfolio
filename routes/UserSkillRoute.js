
import UserSkillController from '../controllers/UserSkillController.js';
import { Router } from 'express';

const router = Router();

router.post('/Userskill', UserSkillController.addSkill);
router.put('/Userskill', UserSkillController.updateSkill);
router.get('/Userskill', UserSkillController.getAllUserSkills);

export default router;