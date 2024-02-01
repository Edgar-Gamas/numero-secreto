let numeroSecreto = 0;
let intentos = 0;
//lista de numeros sorteados
let listaNumeros = [];
let numeroMaximo = 10;

//funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El Usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeros);
    //Si ya sorteamos todos los numeros
    if (listaNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {


        //Si el numero generado esta incluido en la lista

        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = "";
}
function condicionesInicio() {
    //Usando funciones que se ejecutan al principio del juego y al reiniciar
    asignarTextoElemento('h1', 'Mi Primer Juego');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function nuevoJuego() {
    //LIMPIAR LA CAJA
    limpiarCaja();
    //iNDICAR MENSAJE DE INICIO
    //GENERAR NUMERO ALEATORIO
    //INICIAR EL NUMERO DE INTENTOS
    condicionesInicio();
    //DESHABILITAR EL BOTON DE NUEVO JUEGO
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}


condicionesInicio();