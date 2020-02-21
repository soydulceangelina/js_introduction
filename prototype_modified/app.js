function person (name, lastname, age, height){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.height = height;
}

person.prototype.hello = function (){
   console.log(`Hola mi nombre es ${this.name} ${this.lastname} tengo ${this.age} años`);
}

// en estos casos no se puede usar arrow function, ya que dentro de esta, this hace referencia al entorno global, osea window
person.prototype.isTall = function () {
    return this.height > 1.8;
}


let dulce = new person('Dulce', 'Mercado', 26, 1.56);
let pepe = new person('Pepe', 'Torres', 32, 1.90);
let teresa = new person('Teresa', 'Romero', 19, 1.70);
let paulina = new person('Paulina', 'Vega', 24, 1.82);

dulce.isTall();
pepe.isTall();

// si dejaramos la funcio isTall abajo de la llamada como en este caso, el codigo se pararia en dulce.isTall() ya que el codigo se ejecuta de arriba a abajo.
/*person.prototype.isTall = function () {
    return this.height > 1.8;
}*/