// variable global de nombre
let name = 'Dulce';

// funcion que muta la variable global al usarla dentro de la funcion
/*function bigNameee(){
    name = name.toUpperCase();
    console.log(name);
    
}

bigNameee();*/


// una buena forma de hacerlo es usando los parametros, pero en este caso no es muy específico
/*function bigNamee(n){
    n = n.toUpperCase();
    console.log(n);
}

bigNamee(name);*/

// js nos permite usar el mismo nombre de variable global, como variable local, pero al pasarla por parametro 
// solo hace modificaciones de forma local sin contaminar el entorno global (window.name)

function bigName(name1){
    name1 = name1.toUpperCase();
    console.log(name1);
}

bigName(name);