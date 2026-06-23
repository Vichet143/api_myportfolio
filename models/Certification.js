class Certification {
  constructor(
    certificate_name,
    organization,
    issue_date,
    certificate_url,
    type_certification,
  ) {
    ((this.certificate_name = certificate_name),
      (this.organization = organization),
      (this.issue_date = issue_date),
      (this.certificate_url = certificate_url),
      (this.type_certification = type_certification)
    );
  }

  toFirebaseObject() {
    return {
      certificate_name: this.certificate_name,
      organization: this.organization,
      issue_date: this.issue_date,
      certificate_url: this.certificate_url,
      type_certification: this.type_certification
    };
  }
}

export default Certification;
