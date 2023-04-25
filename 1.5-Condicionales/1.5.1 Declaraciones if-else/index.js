const firstName = 'Sarah';
const age = Number(prompt('Escribe tu edad'));
const isOfLegalAge = age >= 18;

//Comparación directa en la condición
if(age >= 18) {
    console.log("Ya puedes sacar tu INE");
} else {
    console.log('Todavia no puedes sacar tu INE');
}

//Comparación innecesaria...
if(isOfLegalAge == true) {
    console.log("Ya puedes sacar tu INE");
} else {
    console.log('Todavia no puedes sacar tu INE');
}

//Comparación solo con una variable que ya es boolean
if(isOfLegalAge) {
    console.log(firstName +', Ya puedes sacar tu INE porque tienes ' + age);
} else {
    console.log(`${firstName}, Todavia no puedes sacar tu INE porque tienes ${age}`);
}


//Ejercicio en Calse: "Es par?"
let numero= prompt ("Ingresa  un numero");
let residuo = (numero % 2) === 0;
if(residuo){
    console.log("Es par");
}else{
    console.log("No es par");
}

