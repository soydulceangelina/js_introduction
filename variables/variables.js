// VARIABLES STRING 

// variable string
var string = "cadena de texto";

console.log(string);

// Funcion para pasar un string a mayusculas y minusculas
var name = "Dulce", lastName = "Mercado";

var capitalLetter = name.toUpperCase();

console.log(capitalLetter);

var lowerCase = lastName.toLowerCase();

console.log(lowerCase);

// funcion para conocer el caracter respectivo al indice que se le pase 
var firstLetter = name.charAt(3);

console.log(firstLetter);

// atributo que cuenta los caracteres
var quantity = name.length;

console.log(quantity);

// concatenar strings
var fullName = name + ' ' + lastName;

console.log(fullName);

// interpolacion de texto
var fullName2 = `${name} ${lastName.toLowerCase()}`;

console.log(fullName2);

// sub-strings, se pasa el indice del caracter donde empieza y cuantos tomar
var str = name.substr(1, 2);

console.log(str);

// ultimo caracter de un str
var lastLetter = name.charAt(name.length - 1);

console.log(lastLetter);


// VARIABLES NUMEROS



// variable numero
var number = 3;

console.log(number);

// Incremento, es como decir age = age + 1
var age = 26;

age += 1;

console.log(age);

// Decremento, es como decir weight = weight - 2
var weight = 56;

weight -= 2;

console.log(weight);

// Sumar dos numeros en variables, tambien se puede decir weight += bread
var bread = 1;

var newWeight = weight + bread;

console.log(newWeight);

// Restar dos numeros en variables, tambien se puede decir weight -= soccer
var soccer = 3;

var newWeight2 = newWeight - soccer;

console.log(newWeight2);

// ejercicio con decimales
var price = 200.3;

// esta operacion nos ayuda a ser mas precisos con los decimales en la compra de tres productos
var total = Math.round(price * 100 * 3) / 100;
console.log(total);

// esta operacion nos permite tener 2 decimales
var total1 = total.toFixed(2);
console.log(total1);

// la operacion anterior nos da como producto un str, con esta nueva operacion la pasamos a numero 
var total2 = parseFloat(total1);
console.log(total2);

// division de dos numero en variables
var pizza = 8;
var people = 2;
var slicesPerPerson = pizza / people;
console.log(slicesPerPerson);