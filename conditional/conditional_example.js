let martha = {
    name: 'Martha',
    lastName: 'Gomez',
    age: 32,
    doctor: true,
    artist: false,
    singer: false,
    writer: true
}

let luis = {
    name: 'Luis',
    lastName: 'Torres',
    age: 11
}

// if y else nos sirven para condicionar, en este caso si persona.profession === true se ejecuta el if, si eso no se cumple se ejecuta el else
/*function printProfession(persona){
    console.log(`${persona.name} es:`);

    if(persona.doctor){
        console.log('Doctor/a');
    }
    else{
        console.log('No es Doctor/a');
    }
    if(persona.artist){
        console.log('Artista');
    }
    else{
        console.log('No es Artista');
    }
    if(persona.singer){
        console.log('Singer');
    }
    else{
        console.log('No es Cantante');
    }
    if(persona.writer){
        console.log('Escritor/a');
    }
    else{
        console.log('No es Escritor/a');
    }
}

printProfession(martha);*/


// en este caso hacemos una condicional para saber si es mayor de edad con el >=

const MAYORIA_DE_EDAD = 18;

function mayorDeEdad (persona){
    return persona.age >= MAYORIA_DE_EDAD;
}

function printAge (persona){
    if(mayorDeEdad(persona)){
        console.log(`${persona.name} es mayor de edad`);
        
    }
    else{
        console.log(`${persona.name} es menor de edad`);
    }
}

printAge(martha);

printAge(luis);