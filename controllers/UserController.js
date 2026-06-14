import UserService from "../services/UserService.js";

class UserController {
  static async createUser(req, res) {
    try {
      const imageUrl = req.body.profile_image;
      const userData = { ...req.body, profile_image: imageUrl };
      const result = await UserService.createUser(userData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  static async updateUser(req, res) {
    try {
      const imageUrl = req.body.profile_image;
      if (!imageUrl) {
        return res.status(400).json({ error: "Image is required" });
      }
      const userId = req.query.id;
      const userData = req.body;
      const result = await UserService.updateUser(userId, userData);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.query.id;
      const result = await UserService.getUserById(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default UserController;
