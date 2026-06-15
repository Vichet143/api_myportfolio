import UserSkillService from "../services/UserSkillService.js";

class UserSkillController {
  static async addSkill(req, res) {
    try {
      const skilldata = req.body;
      const result = await UserSkillService.addSkill(skilldata);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateSkill(req, res) {
    try {
      const skillId = req.query.id;
      const skillData = req.body;
      const result = await UserSkillService.updateSkill(skillId, skillData);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllUserSkills(req, res) {
    try {
      const result = await UserSkillService.getallUserSkills();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default UserSkillController;
