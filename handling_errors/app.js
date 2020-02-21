const apiUrl = 'https://swapi.co/api/';
const peopleUrl = 'people/:id/'
const opts = { crossDomain: true};

function getCharacter(id, callback){
    const url = `${apiUrl}${peopleUrl.replace(':id', id)}`;

    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`)
         })
}


getCharacter(1, function (character){
    console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)

    getCharacter(2, function (character) {
        console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)

        getCharacter(3, function (character) {
            console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)

            getCharacter(4, function (character){
                console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)

                getCharacter(5, function (character){
                    console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)

                    getCharacter(6, function (character){
                        console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)
                        
                        getCharacter(7, function (character){
                            console.log(`Hola, mi nombre es ${character.name} y mido ${character.height} cm`)
                        })
                    })
                })
            })
        })
    })
})
