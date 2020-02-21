// constructor, se ejecuta cuando creemos una new person
function person (name, lastname, age, height){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.height = height;
}

person.prototype.hello = function (){
    if (this.height >= 1.80){
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} tengo ${this.age} años y soy una persona alta`);
    }
    else{
        console.log(`Hola mi nombre es ${this.name} ${this.lastname} tengo ${this.age} años`);
    }
}

// new, palabra reservada para crear nuevos objetos dado un prototipo (en este CacheStorage, prototipo person)

let dulce = new person('Dulce', 'Mercado', 26, 1.56);
let pepe = new person('Pepe', 'Torres', 32, 1.90);
let teresa = new person('Teresa', 'Romero', 19, 1.70);
let paulina = new person('Paulina', 'Vega', 24, 1.82);

dulce.hello();
pepe.hello();