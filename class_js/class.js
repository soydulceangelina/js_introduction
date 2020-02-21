class person {
    constructor (name, lastname, age, height){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }
    hello(){
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} tengo ${this.age} años`);
    }

    isTall(){
        return this.height > 1.8;
    }
}

class developer extends person{
    constructor (name, lastname, age, height){
        super(name, lastname, age, height);
    }
    hello(){
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} y soy desarrollador`);
    }
}

let pepe = new developer('Pepe', 'Torres', 32, 1.90);
let dulce = new person('Dulce', 'Mercado', 26, 1.56);

