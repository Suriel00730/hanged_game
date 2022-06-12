const btn_iniciar_juego = document.querySelector(".btn_iniciar_juego");
const btn_agregar_palabra = document.querySelector(".btn_agregar_palabra");

btn_iniciar_juego.addEventListener("click", function (event) {
    event.preventDefault();

    palabraRandom();
    console.log(aleatoria)
    crearEspaciosDeLetra();
    home.classList.add("oculto");
    contenedor_juego.classList.remove("oculto");
});

btn_agregar_palabra.addEventListener("click", function (event) {
    event.preventDefault();

    home.classList.add("oculto");
    form_agregar_palabra.classList.remove("oculto");
});