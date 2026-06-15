import Experience from "../models/Experience.js";
import { db } from "../config/firebase.js";
import RequestChecker from "../utils/CheckRequest.js";

class ExperienceService {
  static async addExperience(experienceData) {
    try {
      RequestChecker(experienceData.user_id, "user_id");
      RequestChecker(experienceData.company_name, "company_name");
      RequestChecker(experienceData.position, "position");
      RequestChecker(experienceData.start_date, "start_date");
      RequestChecker(experienceData.end_date, "end_date");
      RequestChecker(experienceData.description, "description");

      const newExperience = new Experience(
        experienceData.user_id,
        experienceData.company_name,
        experienceData.position,
        experienceData.start_date,
        experienceData.end_date,
        experienceData.description,
      );

      const experienceRef = db.collection("experiences").doc();
      await experienceRef.set(newExperience.toFirebaseObject());

      const createdExperience = await experienceRef.get();
      const createdExperienceData = createdExperience.data();
      return {
        id: experienceRef.id,
        experienceData: createdExperienceData,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateExperience(experienceId, experienceData) {
    try {
      const experienceRef = db.collection("experiences").doc(experienceId);
      const experienceDoc = await experienceRef.get();
      if (!experienceDoc.exists) {
        throw new Error("Experience entry not found");
      }
      const updatedData = {
        ...experienceData,
      };

      await experienceRef.update(updatedData);
      const updatedExperience = await experienceRef.get();
      return { id: experienceRef.id, experienceData: updatedExperience.data() };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllExperiences() {
    try {
      const experiencesSnapshot = await db.collection("experiences").get();
      const allExperiences = experiencesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allExperiences;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}


export default ExperienceService;