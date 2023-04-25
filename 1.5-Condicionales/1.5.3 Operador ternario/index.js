/*
Usa el operador ternario para imprimir en consola un string que indique si 
“México tiene una población por encima del promedio” si es que la población es mayor a 33 Millones de personas o 
“México tiene una población por debajo del promedio” en el caso contrario.

*/

let mexicoPopulation = 39;
// Declaración if-else 
if(mexicoPopulation >= 33) {
    console.log('La población de México está por encima del promedio');
} else {
    console.log('La población de México está por debajo del promedio');
}

//ES06 - Operador Ternario
const aboveAverage = 
    mexicoPopulation >= 33 ? 
    
    console.log('La población de México está por encima del promedio')
    
    : console.log('La población de México está por debajo del promedio');


// Operador ternario y Template String
const aboveAverage2 = `La población de México está por 
                        ${mexicoPopulation >= 33 ? 'encima' : 'debajo'}    
                        del promedio`;


console.log(aboveAverage2);


// Supongamos ue la edad de retiro es de 65 años

const AGE_OF_RETIREMENT = 65;
const THIS_YEAR = 2023;
const birthYear = 1950;

function calculateAge(birthYear) {
    const age = THIS_YEAR - birthYear; //30
    return age; //30
}

console.log(yearsUntilRetirement(birthYear));

function yearsUntilRetirement(birthYear) {
    const age = calculateAge(birthYear);
    const yearsForRetirement = AGE_OF_RETIREMENT - age;
    if (yearsForRetirement <= 0) {
        return 'Ya te retiraste!';
    }
    return (`Te faltan ${yearsForRetirement} años para retirarte`);
}


