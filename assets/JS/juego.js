const cabeza = document.querySelector(".cabeza");
const cuerpo = document.querySelector(".cuerpo");
const mano_izquierda = document.querySelector(".mano_izquierda");
const mano_derecha = document.querySelector(".mano_derecha");
const pierna_izquierda = document.querySelector(".pierna_izquierda");
const pierna_derecha = document.querySelector(".pierna_derecha");

munieco_ahorcado.push(cabeza);
munieco_ahorcado.push(cuerpo);
munieco_ahorcado.push(mano_izquierda);
munieco_ahorcado.push(mano_derecha);
munieco_ahorcado.push(pierna_izquierda);
munieco_ahorcado.push(pierna_derecha);

const btn_nuevo_juego = document.querySelector(".btn_nuevo_juego");
const btn_desistir = document.querySelector(".btn_desistir");

document.addEventListener("keydown", function (event) {

    if (contenedor_juego.classList == "contenedor_juego oculto") return;

    if (palabras_presionadas.includes(event.key)) return;

    if (!verificarLetra(event.key)) return;
    insertarLetra(event.key.toUpperCase());
    palabras_presionadas.push(event.key.toUpperCase());
    mostrarMensaje();
});

btn_nuevo_juego.addEventListener("click", function (event) {
    event.preventDefault();

    limpiarJuego();
    palabraRandom();
    crearEspaciosDeLetra();
    console.log(aleatoria)
});

btn_desistir.addEventListener("click", function (event) {
    event.preventDefault();

    limpiarJuego();
    contenedor_juego.classList.add("oculto");
    home.classList.remove("oculto");
});