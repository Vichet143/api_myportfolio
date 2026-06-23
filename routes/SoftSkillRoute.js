import SoftSkillController from "../controllers/SoftSkillController.js";
import { Router } from "express";

const route = Router();

route.post("/softskill", SoftSkillController.create);
route.put("/softskill", SoftSkillController.update);
route.get("/softskill", SoftSkillController.getall);

export default route;