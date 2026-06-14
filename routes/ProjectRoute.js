import ProjectController from "../controllers/ProjectController.js";
import { Router } from "express";

const router = Router();

router.post("/projects", ProjectController.addProject);
router.put("/projects", ProjectController.updateProject);
router.get("/projects", ProjectController.getAllProjects);

export default router;