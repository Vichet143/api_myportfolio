import ExperienceController from "../controllers/ExperienceController.js";
import { Router } from "express";

const router = Router();

router.post("/experience", ExperienceController.addExperience);
router.put("/experience", ExperienceController.updateExperience);
router.get("/experience", ExperienceController.getAllExperiences);

export default router;