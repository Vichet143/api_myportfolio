import ProjectService from "../services/ProjectService.js";

class ProjectController {
  static async addProject(req, res) {
    try {
      const projectData = req.body;
      const result = await ProjectService.addProject(projectData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateProject(req, res) {
    try {
      const projectId = req.query.id;
      const projectData = req.body;
      const result = await ProjectService.updateProject(projectId, projectData);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllProjects(req, res) {
    try {
      const result = await ProjectService.getAllProjects();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ProjectController;
