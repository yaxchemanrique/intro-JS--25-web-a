// Supongamos que la edad de retiro es de 65 años

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
        return 'Ya te retiraste!'
    }
    return (`Te faltan ${yearsForRetirement} años para retirarte`)
}