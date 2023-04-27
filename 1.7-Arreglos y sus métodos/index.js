const friends = ['Rachel', 'Monica', 'Chandler', 'Gunther', 'Ross', 'Joey'];

const mejorAmiga = friends[0];
console.log(mejorAmiga);

friends[1] = 'Phoebe';
console.log(friends);

console.log(friends.indexOf(5));

//                  0           1       2           3           4       5

const friends1= friends.slice(3);
const friends2= friends.slice(1,4);
console.log(friends1); // gunther ->
console.log(friends2);

console.log(friends);
const firstName = 'Yaxche';
const yaxche = [firstName, 'Manrique', 2023-1993, friends];
console.log(yaxche);

//'Monica'
console.log(yaxche[3][1]);

function calculateAge(birthYear) {
     return 2023 - birthYear;
}

birthYears = [1993, 1538, 1954, 2005];
const age1 = calculateAge(birthYears[0]);
const age2 = calculateAge(birthYears[1]);
const age3 = calculateAge(birthYears[2]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];

const ages = [calculateAge(birthYears[0,2]), age2, age3];

console.log(ages);