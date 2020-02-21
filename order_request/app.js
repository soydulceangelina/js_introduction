// url necesarias para traer la data
const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'
// uno de los parametros, indica que va a traer la data a otra pagina. seguridad.
const opts = { crossDomain: true};

// recibimos el id por parametro, y un callback para llamar en orden
function getCharacter(id, callback){
    const url = `${apiUrl}${peopleUrl.replace(':id', id)}`;
    $.get(url, opts, function (person){
        console.log(`Hola, mi nombre es ${person.name} y mido ${person.height} cm`)
        // si recibes un callback, llamalo
        if(callback){
            callback()
        }
    })
}


// de esta manera llamamos los request en orden
getCharacter(1, function () {
    getCharacter(2, function () {
        getCharacter(3, function () {
            getCharacter(4)
        })
    })
})

