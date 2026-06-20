import CertificationController from "../controllers/CertificationController.js";
import { Router } from "express";

const route = Router();

route.post("/certificate", CertificationController.addCertificate);
route.put("/certificate", CertificationController.updateCertificate);
route.get("/certificate", CertificationController.getAllCertificate)

export default route