import SoftSkillService from "../services/SoftSkillService.js";

class SoftSkillController {
  static async create(req, res) {
    try {
      const result = await SoftSkillService.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const id = req.query.id;
      const result = await SoftSkillService.update(id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getall(req, res) {
    try {
      const result = await SoftSkillService.getall();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default SoftSkillController;
