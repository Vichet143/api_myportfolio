import EducationService from '../services/EducationService.js';

class EducationController {
    static async addEducation(req, res) {
        try {
            const educationData = req.body;
            const result = await EducationService.addEducation(educationData);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateEducation(req, res) {
        try {
            const educationId = req.query.id;
            const educationData = req.body;
            const result = await EducationService.updateEducation(educationId, educationData);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAlleducation(req, res) {
        try {
            const result = await EducationService.getAlleducation();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default EducationController;