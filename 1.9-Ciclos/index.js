// dato es lo que sea seguimos pidienod info
// si es esc paramos

let dato; //undefined

while (dato != 'esc') {
    dato = prompt('ingresa un dato');
    console.log(dato);
}

//12, 24, ...., 120
//1*12, 2*12, 3*12

//contando del 1 al 10 y multiplicando por 12
let i = 1;

while (i <= 10) {
    const resultado = i * 12;
    console.log(`${i} x 12 = ${resultado}`);
    i = i+1;
}


//contando del 1 al 120 y decidiendo si es multiplo de 12 o no
let i = 1;

while (i <= 120) {
    if(i % 12 === 0) {
        const resultado = i;
        console.log(`${resultado}`);
    }
    i = i+1;
}