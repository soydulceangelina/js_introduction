let x = 10, y = '10';

// esta comparación nos da true ya que 10 es igual a 10, y no toma en cuenta el tipo de dato
console.log(x == y);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
// esta comparación nos da false, ya que toma en cuenta tanto el valor como el tipo de dato (uno es number y el otro es String)
console.log(x === y);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
// aqui nos retorna false ya que el solo considera true cuando se apunta al mismo espacio de la memoria ram, osea al mismo objeto,
// y aqui, aunque los values son iguales, son dos objetos distintos

let dulce = {
    name: 'Dulce'
}

let otherDulce = {
    name: 'Dulce'
}

console.log(dulce === otherDulce);

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/

// en este caso arroja true ya que ambas variables apuntan al mismo objeto en la memoria ram 

let maria = {
    name: 'Maria'
}

let otherMaria = maria;

console.log(maria == otherMaria);

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

// aqui da false ya que, aunque en la segunda variable estamos desglosando la variable coco, lo estamos haciendo en un nuevo objeto, con un espacio diferente en memoria ram

let coconut = {
    fruit: 'coconut'
}

let otherFruit = {
    ... coconut
}
 console.log(coconut == otherFruit);

 /*----------------------------------------------------------------------------------------------------------------------------------------------*/

//  en este caso, lo que saldra en consola es que ahora ambos value de los objetos sera pineapple, ya que ambos son el mismo objeto en el mismo espacio en memoria

 let fruit = {
     fruit: 'banana'
 }

 let secondFruit = fruit;

 console.log(secondFruit.fruit = 'pineapple');
 console.log(fruit);

 /*----------------------------------------------------------------------------------------------------------------------------------------------*/

//  en este caso como son dos objetos diferentes, al cambiar uno, no modifica el otro, se va a mostrar que la segunda variable cambio a cat, pero la primera sigue siendo dog

 let animal = {
    animal: 'Dog'
 }

 let otherAnimal = {
    animal: 'Dog'
 }

 console.log(otherAnimal.animal = 'Cat');
 console.log(animal);