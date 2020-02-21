class person {
    constructor (name, lastname, age, height){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }
    hello(sh){
        var {name, lastname} = this;
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} tengo ${this.age} años`);
        if(sh){
            sh(name, lastname, false)
        }
    }

    isTall(){
        return this.height > 1.8;
    }
}


class developer extends person{
    constructor (name, lastname, age, height){
        super(name, lastname, age, height);
    }
    hello(sh){
        var {name, lastname} = this;
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} y soy desarrollador/a`);
        if(sh){
            sh(name, lastname, true)
        }
    }
}

function sayHello (name, lastname, isADev){
    console.log(`Buenos dias ${name} ${lastname}`)

    if(isADev){
        console.log(`No sabia que eras desarrollador/a, yo tambien`)
    }
}

let pepe = new developer('Pepe', 'Torres', 32, 1.90);
let dulce = new person('Dulce', 'Mercado', 26, 1.56);
let teresa = new developer('Teresa', 'Romero', 19, 1.70);
let paulina = new person('Paulina', 'Vega', 24, 1.82);

pepe.hello()
dulce.hello(sayHello)
teresa.hello(sayHello)