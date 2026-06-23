class Education{
    constructor(school_name,degree,field_of_study,start_date,end_date,grade,description, address,google_map){
        this.school_name = school_name;
        this.degree = degree;
        this.field_of_study = field_of_study;
        this.start_date = start_date;
        this.end_date = end_date;
        this.grade = grade;
        this.description = description;
        this.address = address;
        this.google_map = google_map
    }

    toFirebaseObject(){
        return {
            school_name: this.school_name,
            degree: this.degree,
            field_of_study: this.field_of_study,
            start_date: this.start_date,
            end_date: this.end_date,
            grade: this.grade,
            description: this.description,
            address: this.address,
            google_map: this.google_map
        }
    }
}

export default Education;