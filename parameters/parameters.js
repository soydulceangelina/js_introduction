let catalina = {
    name: 'Catalina',
    lastName: 'Gutierrez',
    age: 35
}

let jacinto = {
    name: 'Jacinto',
    lastName: 'Perez',
    age: 78
}

// los objetos que pasamos por parametros, pasan por referencia, osea si lo modificamos dentro del cuerpo de una function, se va a ver modificado fuera de esa funcion tambien

// de esta forma muta el objeto
/*function moreAge(people){
    people.age += 1;
    console.log(people.age);
}

moreAge(catalina);*/

// de esta manera no muta
/*function moreAge2 (age){
    age += 1;
    console.log(age);
}

moreAge2(catalina.age);*/

// podemos crear un objeto nuevo donde se cambie el atributo que queremos, en el caso de age, solo se suma, si se le coloca el += , igualmete muta 
function moreAge3(people){
    return {
        ... people,
        age: people.age + 1,
        job: 'Doctor'
    }
}

console.log(moreAge3(catalina));
