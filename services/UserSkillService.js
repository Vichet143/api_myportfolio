import UserSkill from "../models/UserSkill.js";
import { db } from "../config/firebase.js";
import RequestChecker from "../utils/CheckRequest.js";

class UserSkillService {
  static async addSkill(skilldata) {
    try {
      RequestChecker(skilldata.skill_name, "skill_name");
      RequestChecker(skilldata.categories, "categories");
      RequestChecker(skilldata.level, "level");

      const userSkill = new UserSkill(
        skilldata.skill_name,
        skilldata.categories,
        skilldata.level,
      );

      const skillRef = await db
        .collection("user_skills")
        .add(userSkill.toFirebaseObject());
      const createdSkill = await skillRef.get();
      const createdSkillData = createdSkill.data();
      return {
        user_skill_id: skillRef.id,
        user_skill: createdSkillData,
      };
    } catch (error) {
      throw new Error("Error adding skill: " + error.message);
    }
  }

  static async updateSkill(skillId, skillData) {
    try {
      const skillRef = db.collection("user_skills").doc(skillId);
      const skillDoc = await skillRef.get();
      if (!skillDoc.exists) {
        throw new Error("Skill entry not found");
      }
      const updatedData = {
        ...skillData,
      };
      await skillRef.update(updatedData);
      const updatedSkill = await skillRef.get();
      return { id: skillRef.id, user_skill: updatedSkill.data() };
    } catch (error) {
      throw new Error("Error updating skill: " + error.message);
    }
  }

  static async getallUserSkills() {
    try {
      const skillsSnapshot = await db.collection("user_skills").get();
      const allUserskill = skillsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return allUserskill;
    } catch (error) {
      throw new Error("Error fetching user skills: " + error.message);
    }
  }
}

export default UserSkillService;
