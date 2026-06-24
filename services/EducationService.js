import Education from "../models/Education.js";
import { db } from "../config/firebase.js";
import RequestChecker from "../utils/CheckRequest.js";

class EducationService {
  static async addEducation(education) {
    try {
      RequestChecker(education.school_name, "school_name");
      RequestChecker(education.address, "address")
      RequestChecker(education.degree, "degree");
      RequestChecker(education.field_of_study, "field_of_study");
      RequestChecker(education.start_date, "start_date");
      RequestChecker(education.end_date, "end_date");
      RequestChecker(education.grade, "grade");
      RequestChecker(education.description, "description");
      RequestChecker(education.google_map, "google_map");

      const newEducation = new Education(
        education.school_name,
        education.degree,
        education.field_of_study,
        education.start_date,
        education.end_date,
        education.grade,
        education.description,
        education.address,
        education.google_map
      );
      const educationRef = db.collection("education").doc();
      await educationRef.set(newEducation.toFirebaseObject());

      const createdEducation = await educationRef.get();
      const createdEducationData = createdEducation.data();
      return {
        id: educationRef.id,
        Educationdata: createdEducationData,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateEducation(educationId, educationData) {
    try {
      const educationRef = db.collection("education").doc(educationId);
      const educationDoc = await educationRef.get();
      if (!educationDoc.exists) {
        throw new Error("Education entry not found");
      }
      const updatedData = {
        ...educationData,
        updated_at: new Date(),
      };
      await educationRef.update(updatedData);
      const updatedEducation = await educationRef.get();
      return { id: educationRef.id, educationdata: updatedEducation.data() };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAlleducation() {
    try {
      const educationSnapshot = await db.collection("education").get();
      const educationList = educationSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return educationList;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default EducationService;
