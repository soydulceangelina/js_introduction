let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    age: 26,
    weight: 55
}

console.log(`Al inicio del año ${dulce.name} pesaba ${dulce.weight}Kg`);
const daysOfTheYear = 365;
const gainOrLossNumber = 0.3;
const weightGain = people => people.weight += gainOrLossNumber;
const weightLoss = people => people.weight -= gainOrLossNumber;

const eatALot = () => Math.random() < 0.3;
const playSoccer = () => Math.random() < 0.4;

const meta = dulce.weight - 5;
var days = 0;

// el codigo en el cuerpo de while se va a ejecutar siempre y cuando la condición sea verdadera, una vez entre en false, para el bucle 
// en este ejemplo, siempre que dulce.weight (55), sea mayor que meta (50), va a volver a ejecutar el codigo
while(dulce.weight > meta){
    // el debugger se puede utilizar en un loop infinito, que no este llegando a la condicion, para haci hacer que el navegador pare cada que lea la palabra y poder debuguear
    // debugger
    if(eatALot()){
        weightGain(dulce);
    }
    if(playSoccer()){
        weightLoss(dulce);
    }
    days += 1
}



console.log(`Pasaron ${days} dias haste que ${dulce.name} pudo bajar los 5Kg`);