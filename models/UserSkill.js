class UserSkill {
  constructor(skill_name, categories, level) {
    this.skill_name = skill_name;
    this.categories = categories;
    this.level = level;
  }

  toFirebaseObject() {
    return {
      skill_name: this.skill_name,
      categories: this.categories,
      level: this.level,
    };
  }
}

export default UserSkill;       
