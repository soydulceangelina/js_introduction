// creando objetos, con atributos key: value
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

// se le puede pasar por parametro tanto el objeto, como el atributo unico que necesitamos 
function bigName({name}){
    console.log(name.toUpperCase());
}

bigName(dulce);
bigName(daniela);

bigName({name: 'Julia'});

// Otra forma de resolver la function con objetos
/*function bigName(persona){
    console.log(persona.name.toUpperCase()); 
}

bigName(dulce);*/


// otra forma de resolver la function con objetos
/*function bigName(name){
    name = name.toUpperCase();
    console.log(name);
}

bigName(dulce.name);*/
