// url necesarias para traer la data
const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'
// uno de los parametros
const opts = { crossDomain: true};

const onPeopleResponse = function (person){
    console.log(`Hola, mi nombre es ${person.name} y mido ${person.height} cm`)
}

// recibimos el id por parametro
function getCharacter(id){
    const url = `${apiUrl}${peopleUrl.replace(':id', id)}`;
    $.get(url, opts, onPeopleResponse)
}


// llamas a la function, pero esta asincrona, no se sabe el orden en que se va a responder el request
getCharacter(3)
getCharacter(4)
getCharacter(10)