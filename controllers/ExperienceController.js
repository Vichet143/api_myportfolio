import ExperienceService from "../services/ExperienceService.js";

class ExperienceController {
    static async addExperience(req, res) {
        const experienceData = req.body;
        try {
            const result = await ExperienceService.addExperience(experienceData);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateExperience(req, res) {
        const experienceId = req.query.id;
        const experienceData = req.body;
        try {
            const result = await ExperienceService.updateExperience(experienceId, experienceData);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllExperiences(req, res) {
        try {
            const experiences = await ExperienceService.getAllExperiences();
            res.status(200).json(experiences);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default ExperienceController;