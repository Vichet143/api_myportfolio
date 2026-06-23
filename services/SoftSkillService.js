import SoftSkill from "../models/SoftSkill.js";
import RequestChecker from "../utils/CheckRequest.js";
import { db } from "../config/firebase.js";

class SoftSkillService {
  static async create(data) {
    try {
      RequestChecker(data.title, "title");
      RequestChecker(data.text, "text");

      const softskill = new SoftSkill(data.title, data.text);

      const dataRef = await db
        .collection("softskill")
        .add(softskill.toFirebaseObject());

      const datacreate = await dataRef.get();
      const data2 = datacreate.data();

      return {
        id: dataRef.id,
        data: data2,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update(softskillId, data) {
    try {
      const dataRef = await db.collection("softskill").doc(softskillId);
      const dataDoc = await dataRef.get();

      if (!dataDoc.exists) {
        throw new Error("SoftSkill Id is not found");
      }

      const updateData = {
        ...data,
      };

      await dataRef.update(updateData);

      const updatedata = await dataRef.get();

      return {
        id: dataRef.id,
        data: updatedata.data(),
      };
    } catch (error) {
        throw new Error(error.message)
    }
  }

  static async getall(){
    try {
        const get = db.collection("softskill").get();

        const data = (await get).docs.map(doc =>({
            id:doc.id,
            ...doc.data(),
        }))

        return data;
    } catch (error) {
        throw new Error(error.message)
    }
  }
}

export default SoftSkillService;