import User from "../models/User.js";
import admin, { db } from "../config/firebase.js";
import RequestChecker from "../utils/CheckRequest.js";

class UserService {
  static async createUser(userData) {
    try {
      RequestChecker(userData.full_name, "Full Name");
      RequestChecker(userData.email, "Email");
      RequestChecker(userData.phone_number, "Phone Number");
      RequestChecker(userData.bio, "Bio");
      RequestChecker(userData.profile_image, "Profile Image");
      RequestChecker(userData.github_url, "GitHub URL");
      RequestChecker(userData.linkedin_url, "LinkedIn URL");
      RequestChecker(userData.telegram_url, "Telegram URL");

      const user = new User(
        userData.full_name,
        userData.email,
        userData.phone_number,
        userData.bio,
        userData.profile_image,
        userData.github_url,
        userData.linkedin_url,
        userData.telegram_url,
        new Date(),
        new Date(),
      );
      const userRef = await db.collection("users").add(user.toFirebaseObject());
      const createdUser = await userRef.get();
      const createdUserData = createdUser.data();
      return { id: userRef.id, userdata: createdUserData };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateUser(userId, userData) {
    try {
      const userRef = db.collection("users").doc(userId);
        const userDoc = await userRef.get();
        if (!userDoc.exists) {
            throw new Error("User not found");
        }
        const updatedData = {
            ...userData,
            updated_at: new Date()
        };
        await userRef.update(updatedData);
        const updatedUser = await userRef.get();
        return { id: userRef.id, userdata: updatedUser.data() };
    } catch (error) {
        throw new Error(error.message);
    }
}
}

export default UserService;
