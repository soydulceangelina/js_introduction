const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'
const opts = { crossDomain: true};

function getCharacter(id){
    // asi se escribe una promesa, en el constructor de la promesa se le pasa una funcion, que recibe como parametro resolve y reject, por si se resuelve o si hay un error
    return new Promise((resolve, reject) => {
        const url = `${apiUrl}${peopleUrl.replace(':id', id)}`;
    // solo si el .get es exitoso, se ejecuta esta funcion
        $
            .get(url, opts, function(data){
                resolve(data);
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Ha ocuriido un error al obtener el personaje ${id}`)
}

// llamo a la funcion con el id que me interesa, no hay otro parametro ya que obtengo el valor es llamando el .then, al cual se le pasa una funcion, la cual se ejecuta cuando la promesa se resuelva exitosamente
getCharacter(1)
    .then(function(data){
        console.log(`El personaje 1 es ${data.name}`)
    })

.catch(onError);