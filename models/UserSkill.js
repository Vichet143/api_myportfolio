class UserSkill {
  constructor(user_id, skill_name, categories, level) {
    this.user_id = user_id;
    this.skill_name = skill_name;
    this.categories = categories;
    this.level = level;
  }

  toFirebaseObject() {
    return {
      user_id: this.user_id,
      skill_name: this.skill_name,
      categories: this.categories,
      level: this.level,
    };
  }
}

export default UserSkill;       
