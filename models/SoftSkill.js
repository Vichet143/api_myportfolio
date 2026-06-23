class SoftSkill{
    constructor(tilte, text){
        this.tilte = tilte,
        this.text = text
    }

    toFirebaseObject(){
        return{
            title: this.tilte,
            text: this.text
        }
    }
}

export default SoftSkill;