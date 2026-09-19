const cta = document.querySelector("#cta");

const titulo = cta.dataset.titulo;
const subtitulo = cta.dataset.subtitulo;
const textoBoton = cta.dataset.boton;
const enlace = cta.dataset.enlace;
const externo = cta.dataset.externo === "true";

cta.innerHTML = `
    <section class="CTA_Section">

        <div class="CTA_Container">

            <h2 class="CTA_Titulo">
                ${titulo}
            </h2>

            <p class="CTA_Texto">
                ${subtitulo}
            </p>

            <a class="CTA_Boton"
               href="${enlace}"
               aria-label="${textoBoton}"
               ${externo ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                ${textoBoton}
            </a>

        </div>

    </section>
`;