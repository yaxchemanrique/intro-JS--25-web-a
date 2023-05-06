// Para el numero secreto
const secretNumber = document.querySelector('.secret-number');
const randomNumber = Math.trunc(Math.random() * 20) + 1;

secretNumber.textContent = randomNumber;

// Para seleccional el mensaje
const mensaje = document.querySelector('#mensaje');

let score = 20;
const scoreNumber = document.querySelector('.score-number');

const button = document.querySelector('.check');
button.addEventListener('click', function() {
    
    // Para el valor que tiene el input
    const respuestaString = document.querySelector('#floatingInput').value;
    const respuesta = Number(respuestaString);
    
    if(respuesta === randomNumber) {
        mensaje.classList = '';

        mensaje.textContent = 'Correcto! 🎉';
        mensaje.classList.add('alert-success', 'alert');
    } else if(respuesta > randomNumber){
        mensaje.classList = '';
        if(score > 0) {
            mensaje.textContent = 'Intenta con un numero más pequeño';
            mensaje.classList.add('alert-danger', 'alert');
            score-- // score = score - 1;
            scoreNumber.textContent = score;
        } else {
            mensaje.textContent = 'GAME OVER!';
            mensaje.classList.add('alert-warning', 'alert');

        }
    } else if(respuesta < randomNumber){
        mensaje.classList = '';
        
        mensaje.textContent = 'Intenta con un numero más grande';
        mensaje.classList.add('alert-danger', 'alert');
    }
    
});
