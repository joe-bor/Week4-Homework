class Hamster {
    constructor(name){
        this.name = name
        this.owner = ''
        this.price = 15
    }
    wheelRun(){
        console.log('Squeak squeak')
    }

    eatFood(){
        console.log('nibble nibble')
    }

    getPrice(){
        return this.price
    }
}

