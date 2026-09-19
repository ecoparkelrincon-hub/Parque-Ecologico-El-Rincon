const preguntas = document.querySelectorAll(".Preguntas_Frecuentes_Container_Pregunta");

preguntas.forEach((pregunta) => {

    const boton = pregunta.querySelector(".Pregunta_Boton");

    pregunta.addEventListener("click", () => {

        preguntas.forEach((otraPregunta) => {

            if (otraPregunta !== pregunta) {
                otraPregunta.classList.remove("abierta");

                const otroBoton = otraPregunta.querySelector(".Pregunta_Boton");
                otroBoton.textContent = "+";
            }

        });

        pregunta.classList.toggle("abierta");

        boton.textContent = pregunta.classList.contains("abierta") ? "−" : "+";

    });

});