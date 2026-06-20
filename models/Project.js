class Project {
  constructor(
    title,
    project_type,
    description,
    project_skill,
    image_url,
    github_uril_frontend,
    github_uril_backend,
    live_demo_url,
    start_date,
    end_date,
  ) {
    this.title = title;
    this.project_type = project_type;
    this.description = description;
    this.project_skill = project_skill;
    this.image_url = image_url;
    this.github_uril_frontend = github_uril_frontend;
    this.github_uril_backend = github_uril_backend;
    this.live_demo_url = live_demo_url;
    this.start_date = start_date;
    this.end_date = end_date;
  }

  toFirebaseObject() {
    return {
      title: this.title,
      project_type: this.project_type,
      description: this.description,
      project_skill: this.project_skill,
      image_url: this.image_url,
      github_uril_frontend: this.github_uril_frontend,
      github_uril_backend: this.github_uril_backend,
      live_demo_url: this.live_demo_url,
      start_date: this.start_date,
      end_date: this.end_date,
    };
  }
}

export default Project;
