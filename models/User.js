
class User{
    constructor(full_name,email,phone_number,bio,profile_image,github_url,linkedin_url,telegram_url,create_at,updated_at){
        this.full_name = full_name;
        this.email = email;
        this.phone_number = phone_number;
        this.bio = bio;
        this.profile_image = profile_image;
        this.github_url = github_url;
        this.linkedin_url = linkedin_url;
        this.telegram_url = telegram_url;
        this.create_at = create_at;
        this.updated_at = updated_at;
    }

    toFirebaseObject(){
        return {
            full_name: this.full_name,
            email: this.email,
            phone_number: this.phone_number,
            bio: this.bio,
            profile_image: this.profile_image,
            github_url: this.github_url,
            linkedin_url: this.linkedin_url,
            telegram_url: this.telegram_url,
            create_at: this.create_at,
            updated_at: this.updated_at
        }
    }
}

export default User;