let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    age: 26
}

let daniela = {
    name: 'Daniela',
    lastName: 'Cartes',
    age: 19
}

function primtNameAndAge({name, age}){
    console.log(`Hola, me llamo ${name} y tengo ${age} años`);
}

primtNameAndAge(dulce);
primtNameAndAge(daniela);
primtNameAndAge({name: 'Teresa', age: 78});