class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructore extends TeamMember {
  
    designation = 'Wenb course Instructor';
    team = 'web team';

    constructor(name, location){
      super(name, location);
    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    
}

class Developer extends TeamMember{
  
    designation = 'Wenb course Instructor';
    team = 'web team';
   
    
    constructor(name, location, tech){
    
        super(name, location);
        this.tech = tech;
    }

    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the ${version}`)
    }
   
}

class Jobplacement extends TeamMember {
   
    designation = 'job placement commandos';
    team = 'job placement';
    
    region;
    constructor(name, location, region){
       super(name, location)
        this.region = region;
    }

    provideResume(feature){
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the ${version}`)
    }
   
}

const alia = new Developer('alia batt', 'dhaka', 'react');
alia.provideFeedback();
console.log(alia);

const bipasha = new Jobplacement('bipasha', 'kolkata', 'India');
console.log(bipasha);