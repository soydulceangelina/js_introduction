let teresa = {
    name: 'Teresa',
    lastName: 'Mendez',
    height: 1.66,
    books: 72
}

let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    height: 1.56,
    books: 12
}

let luis = {
    name: 'Luis',
    lastName: 'Mendez',
    height: 1.70,
    books: 122
}

let marco = {
    name: 'Marco',
    lastName: 'Herrera',
    height: 1.65,
    books: 45
}

let carmen = {
    name: 'Carmen',
    lastName: 'Perez',
    height: 1.78,
    books: 36
}

let jaime = {
    name: 'Jaime',
    lastName: 'Torres',
    height: 1.82,
    books: 28
}

// array
let people = [teresa, dulce, luis, marco, carmen, jaime];

// funcion que va sumando en el contador
const reducer = (counter, {books}) => counter + books;

// necesita dos parametros, una funcion que vaya sumando, y como inicia el contador
let totalBooks = people.reduce(reducer, 0);

console.log(`El grupo tiene en total ${totalBooks} libros`);