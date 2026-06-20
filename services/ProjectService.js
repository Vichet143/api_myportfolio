import Project from '../models/Project.js';
import { db } from '../config/firebase.js';
import RequestChecker from '../utils/CheckRequest.js';

class ProjectService {
    static async addProject(project) {
        try {
            RequestChecker(project.title, "title");
            RequestChecker(project.project_type, "project_type")
            RequestChecker(project.description, "description");
            RequestChecker(project.project_skill, "project_skill");
            RequestChecker(project.image_url, "image_url");
            RequestChecker(project.github_uril_frontend, "github_uril_frontend");
            RequestChecker(project.github_uril_backend, "github_uril_backend");
            RequestChecker(project.live_demo_url, "live_demo_url");
            RequestChecker(project.start_date, "start_date");
            RequestChecker(project.end_date, "end_date");

            //project_skill store as array
            const skills = Array.isArray(project.project_skill)
                ? project.project_skill
                : String(project.project_skill).split(',').map(s => s.trim()).filter(Boolean);

            const newProject = new Project(
                project.title,
                project.project_type,
                project.description,
                skills,
                project.image_url,
                project.github_uril_frontend,
                project.github_uril_backend,
                project.live_demo_url,
                project.start_date,
                project.end_date
            );
            const projectRef = db.collection("projects").doc();
            await projectRef.set(newProject.toFirebaseObject());

            const createdProject = await projectRef.get();
            const createdProjectData = createdProject.data();
            return {
                id: projectRef.id,
                projectData: createdProjectData,
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateProject(projectId, projectData) {
        try {
            const projectRef = db.collection("projects").doc(projectId);
            const projectDoc = await projectRef.get();
            if (!projectDoc.exists) {
                throw new Error("Project entry not found");
            }
            // normalize project_skill if provided in update
            const normalized = { ...projectData };
            if (normalized.project_skill !== undefined && normalized.project_skill !== null) {
                normalized.project_skill = Array.isArray(normalized.project_skill)
                    ? normalized.project_skill
                    : String(normalized.project_skill).split(',').map(s => s.trim()).filter(Boolean);
            }

            const updatedData = {
                ...normalized,
                updated_at: new Date(),
            };
            await projectRef.update(updatedData);
            const updatedProject = await projectRef.get();
            return { id: projectRef.id, projectData: updatedProject.data() };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAllProjects() {
        try {
            const projectsSnapshot = await db.collection("projects").get();
            const projectList = projectsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return projectList;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}


export default ProjectService;