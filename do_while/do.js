let counter = 0;

const rain = () => Math.random() < 0.25;

do{
    counter++
} while(!rain())

// si la condicion en el while se cumple, el codigo en el do se vuelve a ejecutar

if(counter===1){
    console.log(`Fui a ver si llovia ${counter} vez`);
}
else{
    console.log(`Fui a ver si llovia ${counter} veces`);
}