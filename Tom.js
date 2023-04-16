class Tom {
    aliveJerry(Jerry){
       Jerry.setStatus(Jerry.getStatus())
    }
    name
    mass
    speed
    constructor(name,mass,speed) {
        this.name = name;
        this.mass = mass;
        this.speed = speed;
    }

    makeSound(){
        console.log("Meo Meo")
    }
    catchingRats(Jerry){
        if (Jerry.getSpeed() < this.speed){
            console.log("Đã bắt đc chuột")
            this.makeSound()
        } else {
            console.log("Chuột đã chết,Không bắt đc nữa")
        }
    }
    eatingRats(Jerry){
        let massCat = 0;
        if (Jerry.getStatus() === true){
            massCat += Jerry.getMass()+this.mass;
        } else {
            console.log("Chuột đã chết kh đc ăn")
        }
        console.log("Chuột ngon quá")
        return massCat

    }
}