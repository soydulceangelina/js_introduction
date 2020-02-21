let carolina = {
    name: 'Carolina',
    lastName: 'Mercado',
    age: 34
}

let rosy = {
    name: 'Rosangel',
    lastName: 'Ruiz',
    age: 46
}

let cami = {
    name: 'Kamila',
    lastName: 'Zerpa',
    age: 13
}

let carla = {
    name: 'Karla',
    lastName: 'Zerpa',
    age: 12
}

const COMING_OF_AGE = 18;

// se puede guardar una funcion en una variable, de esta forma

/*const comingOfAgeResult = function(people){
    return people.age >= COMING_OF_AGE;
}*/

// asi se crea una arrow function

/*const comingOfAgeResult = (people) =>{
    return people.age >= COMING_OF_AGE;
}*/

// js nos permite quitar los paréntesis si es un solo parametro, además de que si hay una operación, sobre entiende que es un return sin necesidad de escribirlo

// const comingOfAgeResult = people => people.age >= COMING_OF_AGE;

// tambien se puede desestructurar el objeto, de esta forma
const comingOfAgeResult = ({age}) => age >= COMING_OF_AGE;

const printComingOfAge = (people) => {
    if(comingOfAgeResult(people)){
        console.log(`${people.name} es mayor de edad`);
    }
    else{
        console.log(`${people.name} es menor de edad`);
    }
}

// esta es una arrow function y usamos condicional

const access = ({age}) => comingOfAgeResult({age})? 'PERMITIDO': 'DENEGADO';

/*const access = (people) => {
    if(!comingOfAgeResult(people)){
        console.log(`${people.name} TIENE ACCESO DENEGADO`);
    }
    else{
        console.log(`${people.name} TIENE ACCESO PERMITIDO`);
    }
}*/


console.log(access(carolina));
console.log(access(cami));

printComingOfAge(rosy);
printComingOfAge(carla);