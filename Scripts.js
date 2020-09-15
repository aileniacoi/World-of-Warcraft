var respuestaUsuario;
var contadorRespuestas = 0;
var respuesta 
var respuestasRestantes;

function adivinanza(){


    respuestaUsuario = document.getElementById("respuestaUsuario").value;

    if (contadorRespuestas < 3) {
        
        if (respuestaUsuario === "lordaeron"){
            respuesta = '<div class="alert alert-success" role="alert"><h4>¡Acertaste!</h4> <hr> <p>Felicitaciones</p>';

        }else{

            contadorRespuestas += 1; 
            respuestasRestantes = 4 - contadorRespuestas;
            respuesta = '<div class="alert alert-danger" role="alert"><h4>Respuesta incorrecta</h4> <hr> <p>Intentos restantes: ' + respuestasRestantes + '</p>';
            
            if (contadorRespuestas === 1){
                respuesta += 'Pista: Se encuentra en los Reinos del Este.';
            }

            if (contadorRespuestas ===2){
                respuesta += 'Pista: Solía ser un imperio de los humanos.'
            }

        }

    }else{
        respuesta = '<div class="alert alert-danger" role="alert"><h4>Respuesta incorrecta</h4> <hr> <p>Te quedaste sin intentos.</p>'
        document.getElementById("enviar").disabled = true;
    }
    respuesta += '</div>'
    document.getElementById("respuesta").innerHTML = respuesta;
}