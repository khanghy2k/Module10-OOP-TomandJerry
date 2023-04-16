class Jerry {
    name
    mass
    speed
    status

    constructor(name, mass, speed,status) {
        this.name = name;
        this.mass = mass;
        this.speed = speed;
       this.status = status;
    }
    setStatus(status){
        this.status = status;
        if (this.status){
            console.log("Chuột còn sống")
            this.makeSound()
        }else {
            console.log("Chuột đã chết")
        }
    }
    setMass(mass){
        this.mass = mass;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    makeSound(){
        console.log("Chít Chít")
    }
    getStatus(){
        return this.status
    }
    getMass(){
        return this.mass;
    }
    getSpeed(){
        return this.speed;
    }

}