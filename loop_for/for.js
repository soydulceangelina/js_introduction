let dulce = {
    name: 'Dulce',
    lastName: 'Mercado',
    age: 26,
    weight: 55
}

console.log(`Al inicio del año ${dulce.name} pesaba ${dulce.weight}Kg`);
const daysOfTheYear = 365;
const gainOrLossNumber = 0.2;
const weightGain = people => people.weight += gainOrLossNumber;
const weightLoss = people => people.weight -= gainOrLossNumber;


// bucle for para simular incremento o decremento de peso en un año
for (var i = 1; i <= daysOfTheYear; i++) {
    var random = Math.random();

    if(random < 0.25){
        weightGain(dulce);
    }
    else if(random < 0.50){
        weightLoss(dulce);
    }

}

console.log(`Al finalizar del año ${dulce.name} pesaba ${dulce.weight.toFixed(1)}Kg`);