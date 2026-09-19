const recorridoCarro = document.querySelector(".Ruta_Recorrido");
const recorridoPublico = document.querySelector(".Ruta_Recorrido_Publico");

const botonPublico = document.querySelector(".Ruta_Boton_Publico");
const botonCarro = document.querySelector(".Ruta_Boton_Carro");

recorridoPublico.style.display = "none";
botonCarro.classList.add("activo");


// =========================
// CAMBIO DE RUTA
// =========================

botonPublico.addEventListener("click", () => {

    recorridoCarro.style.display = "none";
    recorridoPublico.style.display = "grid";

    botonCarro.classList.remove("activo");
    botonPublico.classList.add("activo");

    rutaCarroMobile.style.display = "none";
    rutaPublicoMobile.style.display = "flex";

});


botonCarro.addEventListener("click", () => {

    recorridoPublico.style.display = "none";
    recorridoCarro.style.display = "grid";

    botonPublico.classList.remove("activo");
    botonCarro.classList.add("activo");

    rutaPublicoMobile.style.display = "none";
    rutaCarroMobile.style.display = "flex";

});


// =========================
// ACTIVAR PUNTOS AL HACER SCROLL
// =========================

function activarPuntos(recorrido) {

    const puntos = recorrido.querySelectorAll(".Ruta_Punto");
    const informacion = recorrido.querySelectorAll(".Ruta_Info");

    informacion.forEach((info, index) => {

        const posicion = info.getBoundingClientRect();

        if (
            posicion.top < window.innerHeight / 2 &&
            posicion.bottom > window.innerHeight / 2
        ) {

            puntos.forEach(punto => {
                punto.classList.remove("punto-activo");
            });

            puntos[index].classList.add("punto-activo");
        }

    });

}


window.addEventListener("scroll", () => {

    if (recorridoCarro.style.display !== "none") {
        activarPuntos(recorridoCarro);
    }

    if (recorridoPublico.style.display !== "none") {
        activarPuntos(recorridoPublico);
    }

});


// =========================
// CREAR RUTA PARA MOBILE
// =========================

function crearRutaMobile() {

    const recorridos = document.querySelectorAll(".Ruta_Recorrido");

    recorridos.forEach((recorrido) => {

        const puntos = recorrido.querySelectorAll(".Ruta_Punto");
        const imagenes = recorrido.querySelectorAll(".Ruta_Imagen");
        const infos = recorrido.querySelectorAll(".Ruta_Info");

        const rutaMobile = document.createElement("div");

        rutaMobile.classList.add("Ruta_Recorrido_Mobile");

        if (recorrido.classList.contains("Ruta_Recorrido_Publico")) {
            rutaMobile.classList.add("Ruta_Recorrido_Mobile_Publico");
        }

        for (let i = 0; i < 5; i++) {

            const etapa = document.createElement("div");

            etapa.classList.add("Ruta_Etapa_Mobile");

            etapa.appendChild(puntos[i].cloneNode(true));
            etapa.appendChild(imagenes[i].cloneNode(true));
            etapa.appendChild(infos[i].cloneNode(true));

            rutaMobile.appendChild(etapa);
        }

        recorrido.parentNode.insertBefore(
            rutaMobile,
            recorrido.nextSibling
        );

        recorrido.classList.add("Ruta_Recorrido_Desktop");

    });

}


crearRutaMobile();


// =========================
// RUTAS MOBILE
// =========================

const rutaCarroMobile = document.querySelector(
    ".Ruta_Recorrido_Mobile:not(.Ruta_Recorrido_Mobile_Publico)"
);

const rutaPublicoMobile = document.querySelector(
    ".Ruta_Recorrido_Mobile_Publico"
);

rutaCarroMobile.style.display = "flex";
rutaPublicoMobile.style.display = "none";


 