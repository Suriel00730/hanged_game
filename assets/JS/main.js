const home = document.querySelector(".home");
const form_agregar_palabra = document.querySelector(".form_agregar_palabra");
const contenedor_juego = document.querySelector(".contenedor_juego");

const contenedor_letras_acertadas = document.querySelector(".contenedor_letras_acertadas");
const contenedor_letras_equivocadas = document.querySelector(".contenedor_letras_equivocadas");
const mensaje = document.querySelector(".mensaje");
const palabra_correcta = document.querySelector(".palabra_correcta");

var letras_equivocadas = [];
var letras_acertadas = 0;

var munieco_ahorcado = [];
var palabras_presionadas = [];
var lista_palabras = ["CAMISA", "AUTO", "ABANICO", "CASA", "NEVERA", "MOCHILA"];
var aleatoria = "";
const letras_permitidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// funcion para insertar letra de palabra buscada.
function insertarLetra(letra) {
    const espacios = document.querySelectorAll(".letra_acertada");
    if (letras_equivocadas.length == munieco_ahorcado.length ||
        letras_acertadas == espacios.length) {
        return;
    }

    if (!aleatoria.includes(letra) &&
        !palabras_presionadas.includes(letra.toUpperCase())) {

        crearSpanLetraEquivocada(letra);
        dibujarAhorcado();
        return;
    }

    for (var i = 0; i < aleatoria.length; i++) {

        if (aleatoria[i].toUpperCase() == letra.toUpperCase() &&
            !palabras_presionadas.includes(letra.toUpperCase())) {

            espacios[i].textContent = letra;
            letras_acertadas++;
        }
    }
}

// funcion para crear espacios de letras necesarias.
function crearEspaciosDeLetra() {
    const espacios = document.querySelectorAll(".letra_acertada");
    if (espacios.length == aleatoria.length) return;

    for (var i = 0; i < aleatoria.length; i++) {
        crearSpanLetraAcertada();
    }
}


//---------------Funciones para crear elemento-------------//
function crearSpanLetraAcertada() {
    var nuevo_span = document.createElement("span");
    nuevo_span.classList.add("letra_acertada");

    contenedor_letras_acertadas.appendChild(nuevo_span);
}

function crearSpanLetraEquivocada(letra) {
    var nuevo_span = document.createElement("span");
    nuevo_span.classList.add("letra_equivocada");
    nuevo_span.textContent = letra.toUpperCase();

    letras_equivocadas.push(letra);
    contenedor_letras_equivocadas.appendChild(nuevo_span);
}


// funcion para verificar si es un caracter valido.
function verificarLetra(letra) {

    return letras_permitidas.includes(letra.toLowerCase());
}


function dibujarAhorcado() {

    for (var i = 0; i < letras_equivocadas.length; i++) {
        munieco_ahorcado[i].classList.remove("oculto");
    }
}

function mostrarMensaje() {
    const espacios = document.querySelectorAll(".letra_acertada");

    if (espacios.length == letras_acertadas) {
        mensaje.classList.remove("oculto");
        mensaje.textContent = "Ganaste, Felicidades!"
        mensaje.style.color = "green";
    }

    if (letras_equivocadas.length == munieco_ahorcado.length) {
        mensaje.classList.remove("oculto");
        mensaje.textContent = "Fin del juego"
        mensaje.style.color = "red";

        palabra_correcta.classList.remove("oculto");
        palabra_correcta.textContent = `Palabra Correcta: ${aleatoria}`;
    }
}

function limpiarJuego() {
    for (var i = 0; i < letras_equivocadas.length; i++) {
        munieco_ahorcado[i].classList.add("oculto");
    }

    const espacios = document.querySelectorAll(".letra_acertada");
    for (var i = 0; i < espacios.length; i++) {

        espacios[i].textContent = "";
        contenedor_letras_acertadas.removeChild(espacios[i]);
    }

    const span_eliminados = document.querySelectorAll(".letra_equivocada");
    for (element of span_eliminados) {
        contenedor_letras_equivocadas.removeChild(element);
    }

    letras_equivocadas = [];
    palabras_presionadas = [];
    letras_acertadas = 0;
    mensaje.classList.add("oculto");
    palabra_correcta.classList.add("oculto");

}

function palabraRandom() {
    var rand = Math.floor(Math.random() * lista_palabras.length);
    aleatoria = lista_palabras[rand];
}
