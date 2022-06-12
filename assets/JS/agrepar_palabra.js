const btn_guardar_empezar = document.querySelector(".btn_guardar_empezar");
const btn_cancelar = document.querySelector(".btn_cancelar");

var input_agregar = document.querySelector(".input_agregar");

btn_guardar_empezar.addEventListener("click", function (event) {
    event.preventDefault();

    if (input_agregar.value != "") {
        lista_palabras.push(input_agregar.value.toUpperCase());
        input_agregar.value = "";
    }

    palabraRandom();
    crearEspaciosDeLetra();
    console.log(aleatoria)
    form_agregar_palabra.classList.add("oculto");
    contenedor_juego.classList.remove("oculto");
});

btn_cancelar.addEventListener("click", function (event) {
    event.preventDefault();

    form_agregar_palabra.classList.add("oculto");
    home.classList.remove("oculto");
});