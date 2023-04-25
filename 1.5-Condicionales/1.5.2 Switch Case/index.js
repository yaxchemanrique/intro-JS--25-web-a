let day = 'lunes'

switch (day) {
    case 'lunes':
        console.log('Sumergirme en mi propia miseria');
        break;
      
    case 'martes':
        console.log('Contemplar el abismo');
        break;
        
    case 'miercoles':
        console.log('Solucionar la hambruna mundial (sin decirle a nadie)');
        break;
    
    case 'jueves':
    case 'viernes':
        console.log('Danza y ejercicio');

    case 'sabado':
    case 'domingo':
        console.log('Cena conmigo');

    default:
        console.log('Ese no es un día de la semana');
  }



day = 'miercoles';

switch (day) {
    case 'lunes':
    case 'miercoles':
        console.log(day + ' Hay clase');
        break;

    case 'martes':
    case 'jueves':
    case 'viernes':
    case 'sabado':
    case 'domingo':
        console.log(day + ' no hay clase');
        break;
    default: 
        console.log('Ese no es un día de la semana');
        break; //?
}

