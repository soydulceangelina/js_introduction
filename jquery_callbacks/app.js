// para hacer un request necesitamos la url a la que le vamos a pedir los datos
const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'

// para hacer el request con jQuery necesitamos llamar el metodo $.get, el cual acepta varios parametros, el primero es la url completa, el segundo es indicar que el request se va a hacer en otra pagina, y por ultimo el callBack, que es una funcion que se pasa por parametro, $.get es el encargado de llamar esta funcion, que se ejecuta o no dependiendo el resultado del request, si es exitoso o no
const lukeUrl = `${apiUrl}${peopleUrl.replace(':id', 4)}`;
const opts = { crossDomain: true};

const onPeopleResponse = function (person){
    // arguments es una variable no definida que tienen todas las funciones, la cual nos da un array con todos los parametros que recibe la function
    // console.log(arguments)
    console.log(`Hola, mi nombre es ${person.name} y mido ${person.height} cm`)
}
$.get(lukeUrl, opts, onPeopleResponse)