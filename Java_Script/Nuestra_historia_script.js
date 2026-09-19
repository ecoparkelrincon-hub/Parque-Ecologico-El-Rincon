document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".Time_Line_Año");

    const contenidoSlides = [
      {
        año1: "19",
        año2: "50",
        mes: "Diciembre",
        titulo: "LAS RAICES",
        texto: "CON TRABAJO, SUDOR Y MUCHA DEDICACIÓN, UNA JOVEN PAREJA BOYACENSE CONSTRUYÓ SU HOGAR EN UNA DE LAS MONTAÑAS DE CUCAITA. ALLÍ NACIÓ EL REFUGIO DE UNA FAMILIA CAMPESINA, RODEADA DE AMOR, RESPETO POR LA NATURALEZA Y CARIÑO POR LOS ANIMALES",
        imagen: "Assets/png/slide1.webp",
    },

    {
        año1: "20",
        año2: "20",
        mes: "Marzo",
        titulo: "EL SUEÑO",
        texto: "LA PANDEMIA CAMBIA EL RITMO DE LA VIDA. ES MOMENTO DE VOLVER A LAS RAÍCES, AL CAMPO Y A UNA VIDA MÁS TRANQUILA, RODEADA DE NATURALEZA.",
        imagen: "Assets/png/slide2.webp",

    },
    {
        año1: "20",
        año2: "20",
        mes: "Abril",
        titulo: "EL PRIMER<br>REFUGIO",
        texto: "COMIENZA LA CONSTRUCCIÓN DE UN PEQUEÑO TIPI. UN PRIMER ESPACIO PENSADO PARA REFUGIARSE, DESCONECTARSE Y VOLVER A DISFRUTAR DE LO SENCILLO.",
        imagen: "Assets/png/slide3.webp",
    },
    {
        año1: "20",
        año2: "20",
        mes: "Mayo",
        titulo: "DONDE NO<br>CRECÍA NADA",
        texto: "EN MEDIO DE PIEDRAS Y TIERRA EMPIEZAN A APARECER FLORES. POCO A POCO, AQUEL LUGAR QUE PARECÍA NO TENER VIDA COMIENZA A TRANSFORMARSE.",
        imagen: "Assets/png/slide4.webp",
    },
    {
        año1: "20",
        año2: "21",
        mes: "Octubre",
        titulo: "EL PRIMER<br>GRAN PASO",
        texto: "LA PRIMERA CABAÑA ESTÁ TERMINADA. EL SUEÑO EMPIEZA A CONVERTIRSE EN ALGO TANGIBLE Y EL LUGAR COMIENZA A TOMAR UNA NUEVA FORMA.",
        imagen: "Assets/png/slide5.webp",
    },
      {
        año1: "20",
        año2: "21",
        mes: "Noviembre",
        titulo: "LOS PRIMEROS<br>HABITANTES",
        texto: "LLEGAN LAS PRIMERAS GALLINAS. CON ELLAS COMIENZA A CRECER LA RELACIÓN ENTRE EL PROYECTO, LOS ANIMALES Y LAS PERSONAS.",
        imagen: "Assets/png/slide6.webp",
    },
    {
        año1: "20",
        año2: "22",
        mes: "Marzo",
        titulo: "RESCATAR<br>LAS RAÍCES",
        texto: "SE RECUPERA Y RESTAURA LA ANTIGUA CASA FAMILIAR. NO SE TRATA SOLAMENTE DE CONSTRUIR ALGO NUEVO, SINO DE CONSERVAR Y RESCATAR AQUELLO QUE YA EXISTÍA.",
        imagen: "Assets/png/slide7.webp",
    },
    {
        año1: "20",
        año2: "23",
        mes: "Julio",
        titulo: "CUANDO TODO<br>SE DETIENE",
        texto: "EL PROYECTO ATRAVIESA UNA ETAPA DIFÍCIL. LOS RECURSOS, EL CANSANCIO Y LAS CIRCUNSTANCIAS HACEN QUE EL CRECIMIENTO TENGA QUE DETENERSE.",
        imagen: "Assets/png/slide8.webp",
    },
      {
        año1: "20",
        año2: "24",
        mes: "Octubre",
        titulo: "VOLVER<br>A AVANZAR",
        texto: "DESPUÉS DE UN PERIODO DE PAUSA, EL PROYECTO VUELVE A TOMAR FUERZA. SE RETOMAN LOS TRABAJOS Y VUELVE LA ILUSIÓN DE SEGUIR CONSTRUYENDO.",
        imagen: "Assets/png/slide9.webp",
    },
      {
        año1: "20",
        año2: "24",
        mes: "Diciembre",
        titulo: "ALGO QUE<br>DEBÍA COMPARTIRSE",
        texto: "LO QUE COMENZÓ COMO UN PROYECTO FAMILIAR EMPIEZA A DESPERTAR LA IDEA DE COMPARTIR ESE LUGAR CON OTRAS PERSONAS.",
        imagen: "Assets/png/slide10.webp",
    },
      {
        año1: "20",
        año2: "25",
        mes: "Enero",
        titulo: "UNA FAMILIA<br>DE ANIMALES",
        texto: "LA PRESENCIA DE LOS ANIMALES CRECE Y SE CONVIERTE EN UNA PARTE FUNDAMENTAL DE LA IDENTIDAD DEL LUGAR.",
         imagen: "Assets/png/slide11.webp",
    },
      {
        año1: "20",
        año2: "25",
        mes: "Diciembre",
        titulo: "NACE EL PARQUE",
        texto: "TODO LO CONSTRUIDO DURANTE ESTOS AÑOS ENCUENTRA FINALMENTE UN NOMBRE Y UN PROPÓSITO: NACE FORMALMENTE EL PARQUE.",
        imagen: "Assets/png/slide12.webp",
    },
    
    ];
function crearHistoriaMobile() {

    const contenedorMobile = document.querySelector(".Time_Line_Mobile");

    contenidoSlides.forEach((slide) => {

        const acontecimiento = document.createElement("article");

        acontecimiento.classList.add("Time_Line_Mobile_Item");

        acontecimiento.innerHTML = `
            <div class="Time_Line_Mobile_Imagen">
                <img src="${slide.imagen}" alt="${slide.titulo.replace(/<br>/g, " ")}">

                <div class="Time_Line_Mobile_Fecha">
                    <h2>${slide.año1}</h2>
                    <h2>${slide.año2}</h2>
                    <p>${slide.mes}</p>
                </div>
            </div>

            <div class="Time_Line_Mobile_Texto">
                <h3>${slide.titulo}</h3>
                <p>${slide.texto}</p>
            </div>
        `;

        contenedorMobile.appendChild(acontecimiento);

    });
}

    const titulo = document.querySelector(".Time_Line_Container_Textos h3");
    const texto = document.querySelector(".Time_Line_Container_Textos p");
    const año1 = document.querySelector(".Time_Line_Container_Fecha h2:nth-of-type(1)");
    const año2 = document.querySelector(".Time_Line_Container_Fecha h2:nth-of-type(2)");
    const mes = document.querySelector(".Time_Line_Container_Fecha p");
    const contenedor = document.querySelector(".Time_Line_Container");
    let slideActual = 0;
    const flechaDerecha = document.querySelector(".fa-angle-right");
    const flechaIzquierda = document.querySelector(".fa-angle-left");
    const lineaProgreso = document.querySelector(".Time_Line_Nav_Linea");


    function mostrarSlide(numeroSlide) {
    slides.forEach(slide => {
    slide.classList.remove("activo");    
});

     slides[numeroSlide].classList.add("activo");
     

     titulo.innerHTML = contenidoSlides[numeroSlide].titulo;
     texto.textContent = contenidoSlides[numeroSlide].texto;

     año1.textContent = contenidoSlides[numeroSlide].año1;
     año2.textContent = contenidoSlides[numeroSlide].año2;

    mes.textContent = contenidoSlides[numeroSlide].mes;

    contenedor.style.backgroundImage =
        `url("${contenidoSlides[numeroSlide].imagen}")`;
}
function actualizarProgreso() {

    const primerPunto = slides[0].querySelector(".Time_Line_Punto");
    const puntoActual = slides[slideActual].querySelector(".Time_Line_Punto");

    const lineaRect = lineaProgreso.getBoundingClientRect();
    const primerPuntoRect = primerPunto.getBoundingClientRect();
    const puntoActualRect = puntoActual.getBoundingClientRect();

    const centroPrimerPunto =
        primerPuntoRect.left + primerPuntoRect.width / 2;

    const centroPuntoActual =
        puntoActualRect.left + puntoActualRect.width / 2;

    const inicio =
        centroPrimerPunto - lineaRect.left;

    const ancho =
        centroPuntoActual - centroPrimerPunto;

    lineaProgreso.style.setProperty(
        "--progreso-left",
        `${inicio}px`
    );

    lineaProgreso.style.setProperty(
        "--progreso-width",
        `${ancho}px`
    );
}
    

    slides.forEach(slide => {

    slide.addEventListener("click", () => {

        slideActual = Number(slide.dataset.slide);

        console.log(slideActual);

        mostrarSlide(slideActual);
        actualizarProgreso();

    });

});


flechaDerecha.addEventListener("click", () => {

    if (slideActual < contenidoSlides.length - 1) {

        slideActual++;

        mostrarSlide(slideActual);
        actualizarProgreso();

    }

});
flechaIzquierda.addEventListener("click", () => {
    console.log("click izquierda");

    if (slideActual > 0) {

        slideActual--;

        mostrarSlide(slideActual);
        actualizarProgreso();

    }

});


mostrarSlide(0);
actualizarProgreso();
window.addEventListener("resize", () => {
actualizarProgreso();
});
setInterval(() => {
    slideActual++;

    if (slideActual >= contenidoSlides.length) {
        slideActual = 0;
    }

    mostrarSlide(slideActual);
    actualizarProgreso();
}, 5000);

crearHistoriaMobile();
});

