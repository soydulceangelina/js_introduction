let maria = {
    name: 'Maria',
    lastName: 'Gutierrez',
    height: 1.58
}

let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    height: 1.56
}

let luis = {
    name: 'Luis',
    lastName: 'Mendez',
    height: 1.72
}

let javier = {
    name: 'Javier',
    lastName: 'Herrera',
    height: 1.65
}

let carmen = {
    name: 'Carmen',
    lastName: 'Perez',
    height: 1.70
}

 let people = [maria, dulce, luis, javier, carmen];

//  console.log(people[3].name);

for (var i = 0; i < people.length; i++){
    var person = people[i];
    console.log(`${person.name} mide ${person.height}mts`);
}
 