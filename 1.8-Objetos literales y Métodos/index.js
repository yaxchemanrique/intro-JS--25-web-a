const yaxche = {
    firstName: 'Yaxche',
    lastName: 'Manrique',
    birthYear: 1993,
    job: 'sensei',
    friends: ['Rachel', 'Monica', 'Chandler'],

    calculateAge: function () {
        yaxche.age = 2023 - yaxche.birthYear
        return yaxche.age;
    }
};



console.log( yaxche );



// Yaxche tine 4 amigos y su mejor amiga es Rachel
const description = yaxche.firstName+ ' tiene ' + yaxche.friends.length + ' amigos, y su mejor amiga es ' + yaxche.friends[0];
console.log(description);
const interesadaEn = prompt('Dime qué quieres saber de Yaxche, ecoge entre firstName, lastName, age, ...');

if (yaxche[interesadaEn] || yaxche[interesadaEn] === 0) {
    console.log(`${interesadaEn}: ${yaxche[interesadaEn]}`);
} else {
    console.log('No existe esa propiedad');
}
