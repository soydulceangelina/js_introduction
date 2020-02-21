let teresa = {
    name: 'Teresa',
    lastName: 'Mendez',
    height: 1.66
}

let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    height: 1.56
}

let luis = {
    name: 'Luis',
    lastName: 'Mendez',
    height: 1.70
}

let marco = {
    name: 'Marco',
    lastName: 'Herrera',
    height: 1.65
}

let carmen = {
    name: 'Carmen',
    lastName: 'Perez',
    height: 1.78
}

let jaime = {
    name: 'Jaime',
    lastName: 'Torres',
    height: 1.82
}

let people = [teresa, dulce, luis, marco, carmen, jaime];

const heightToCms = person => ({
    ...person,
    height: person.height *100
})

let peopleCms = people.map(heightToCms)
console.log(peopleCms);