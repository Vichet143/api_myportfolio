import CertificationService from "../services/CertificationService.js";

class CertificationController {
  static async addCertificate(req, res) {
    try {
      const certificateData = req.body;
      const result =
        await CertificationService.addCertification(certificateData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateCertificate(req, res) {
    try {
      const userId = req.query.id;
      const dataUpdate = req.body;

      const result = await CertificationService.updateCertificate(
        userId,
        dataUpdate,
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllCertificate(req, res) {
    try {
      const result = await CertificationService.getAllCertificate();
      res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
}

export default CertificationController;
