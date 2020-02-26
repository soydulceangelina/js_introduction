const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'
const opts = { crossDomain: true};

function getCharacter(id){
    return new Promise((resolve, reject) => {
        const url = `${apiUrl}${peopleUrl.replace(':id', id)}`;
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

// function asincrona, para usar el await y el try/ catch necesitamos declararla asi
async function getCharacters (){
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promises = ids.map(id => getCharacter(id))
    // hay que colocar toda la parte asincrona dentro de un bloque try/catch, donde vamos a poner nuestro llamado asincrono
    try{
        // lo que nos dice el await es que alli se va a detener la function hasta que todas las promesas sean resueltas y es alli cuando se guardan en la variables
        var CharacterData = await Promise.all(promises)
        console.log(CharacterData)
    } catch (id){
        onError
    }
}

getCharacters();
