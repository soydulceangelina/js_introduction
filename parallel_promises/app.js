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

var ids = [1, 2, 3, 4, 5, 6, 7];
var promises = ids.map(id => getCharacter(id))
Promise
    // este metodo obtiene el valor de la PerformanceMeasure, pasandole el array de promesas
    .all(promises)
    .then( CharacterData => console.log(CharacterData))
    .catch(onError)