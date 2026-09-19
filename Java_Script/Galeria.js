const botonesGaleria = document.querySelectorAll(".Boton_Galeria");

const lightbox = document.getElementById("Lightbox");

const botonCerrar = document.querySelector(".Lightbox_Cerrar");
const botonSiguiente = document.querySelector(".Lightbox_Siguiente");
const botonAnterior = document.querySelector(".Lightbox_Anterior");
const lightboxEncabezado = document.querySelector(".Lightbox_Informacion h2");
const lightboxTitulo = document.querySelector(".Lightbox_Informacion h3");
const lightboxDescripcion = document.querySelector(".Lightbox_Informacion p");
const imagenLightbox = document.querySelector(".Lightbox_Imagen")
const contadorLightbox = document.querySelector(".Lightbox_Contador");
const galerias = {

    Animales: [
        "Assets/png/Gallerias/Animales/1.webp",
        "Assets/png/Gallerias/Animales/2.webp",
        "Assets/png/Gallerias/Animales/3.webp",        
        "Assets/png/Gallerias/Animales/4.webp",
        "Assets/png/Gallerias/Animales/5.webp",
        "Assets/png/Gallerias/Animales/6.webp",
        "Assets/png/Gallerias/Animales/7.webp",        
        "Assets/png/Gallerias/Animales/8.webp"
    ],

    Cabana: [
        "Assets/png/Gallerias/Cabana/1.webp",
        "Assets/png/Gallerias/Cabana/2.webp",
        "Assets/png/Gallerias/Cabana/3.webp",
        "Assets/png/Gallerias/Cabana/4.webp",
        "Assets/png/Gallerias/Cabana/5.webp",
        "Assets/png/Gallerias/Cabana/6.webp"
    ],

    Museo: [
        "Assets/png/Gallerias/Museo/1.webp",
        "Assets/png/Gallerias/Museo/2.webp",
        "Assets/png/Gallerias/Museo/3.webp",        
        "Assets/png/Gallerias/Museo/4.webp",
        "Assets/png/Gallerias/Museo/5.webp",
        "Assets/png/Gallerias/Museo/6.webp",
        "Assets/png/Gallerias/Museo/7.webp"
    ],

    Naturaleza: [
        "Assets/png/Gallerias/Naturaleza/1.webp",
        "Assets/png/Gallerias/Naturaleza/2.webp",
        "Assets/png/Gallerias/Naturaleza/3.webp",        
        "Assets/png/Gallerias/Naturaleza/4.webp",
        "Assets/png/Gallerias/Naturaleza/5.webp",
        "Assets/png/Gallerias/Naturaleza/6.webp",
        "Assets/png/Gallerias/Naturaleza/7.webp"
    ]

};
const informacionGalerias = {
    Animales: {
        titulo: "ANIMALES",
        encabezado: "NUESTROS",
        descripcion: "Descubre los animales que llenan de vida y movimiento cada rincón del parque."
    },

    Cabana: {
        titulo: "CABAÑA",
        encabezado: "LA",
        descripcion: "Un espacio acogedor donde la naturaleza y los detalles artesanales se encuentran."
    },

    Museo: {
        titulo: "MUSEO",
        encabezado: "NUESTRO",
        descripcion: "Un recorrido por el arte, la creatividad y las historias que hacen único a El Rincón."
    },

    Naturaleza: {
        titulo: "NATURALEZA",
        encabezado: "NUESTRA",
        descripcion: "Camina entre árboles, jardines y paisajes que invitan a detenerse y disfrutar."
    }

};

let indiceActual = 0;
let galeriaActual = "";

botonCerrar.addEventListener("click", () => {

    lightbox.classList.remove("abierto");

});


botonesGaleria.forEach((boton) => {

    boton.addEventListener("click", () => {

        const galeria = boton.dataset.galeria;

        galeriaActual = galeria;

        indiceActual = 0;

        const informacion = informacionGalerias[galeria];
        lightboxEncabezado.textContent = informacion.encabezado;
        lightboxTitulo.textContent = informacion.titulo;
        lightboxDescripcion.textContent = informacion.descripcion;  
        const imagenes = galerias[galeria];
       
        imagenLightbox.src = imagenes[indiceActual];
        contadorLightbox.textContent = `${indiceActual + 1} / ${imagenes.length}`;
        lightbox.classList.add("abierto");

    });

});


botonSiguiente.addEventListener("click", () => {
    const imagenes = galerias[galeriaActual];
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;         
        imagenLightbox.src = imagenes[indiceActual];
        contadorLightbox.textContent = `${indiceActual + 1} / ${imagenes.length}`;

    }

});

botonAnterior.addEventListener("click", () => {
    const imagenes = galerias[galeriaActual];
    if (indiceActual > 0) {
        indiceActual--;   
        imagenLightbox.src = imagenes[indiceActual];
        contadorLightbox.textContent = `${indiceActual + 1} / ${imagenes.length}`;
        

    }

});
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        lightbox.classList.remove("abierto");

    }

});