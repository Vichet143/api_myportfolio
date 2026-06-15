
class Experience{
    constructor(user_id, company_name, position, start_date, end_date, description){
        this.user_id = user_id;
        this.company_name = company_name;
        this.position = position;
        this.start_date = start_date;
        this.end_date = end_date;
        this.description = description;
    }

    toFirebaseObject(){
        return {
            user_id: this.user_id,
            company_name: this.company_name,
            position: this.position,
            start_date: this.start_date,
            end_date: this.end_date,
            description: this.description
        }
    }
}

export default Experience;