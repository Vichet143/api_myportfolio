class Project {
  constructor(
    user_id,
    title,
    description,
    project_skill,
    image_url,
    github_uril,
    live_demo_url,
    start_date,
    end_date,
  ) {
    this.user_id = user_id;
    this.title = title;
    this.description = description;
    this.project_skill = project_skill;
    this.image_url = image_url;
    this.github_uril = github_uril;
    this.live_demo_url = live_demo_url;
    this.start_date = start_date;
    this.end_date = end_date;
  }

  toFirebaseObject() {
    return {
      user_id: this.user_id,
      title: this.title,
      description: this.description,
      project_skill: this.project_skill,
      image_url: this.image_url,
      github_uril: this.github_uril,
      live_demo_url: this.live_demo_url,
      start_date: this.start_date,
      end_date: this.end_date,
    };
  }
}

export default Project;
