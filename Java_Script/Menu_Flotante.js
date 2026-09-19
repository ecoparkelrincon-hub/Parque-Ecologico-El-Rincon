const contenedorFlotante = document.createElement("div");

contenedorFlotante.classList.add("Contacto_Flotante");

contenedorFlotante.innerHTML = `
    <!-- Botón principal -->
    <button class="Contacto_Flotante_Boton" aria-label="Abrir opciones">
        <i class="fa-solid fa-comment"></i>
    </button>

    <!-- Opciones -->
    <div class="Contacto_Flotante_Opciones">

        <!-- Waze -->
        <a class="Flotante_Waze"
           href="https://ul.waze.com/ul?from=place.ChIJKyk9IAB_ao4ROAzMVix3lyY&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Llegar con Waze">
            <i class="fa-brands fa-waze"></i>
        </a>

        <!-- WhatsApp -->
        <a class="Flotante_WhatsApp"
           href="https://wa.me/573212296846"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
        </a>

        <!-- Correo -->
        <a href="mailto:ecoparkelrincon@gmail.com"
           aria-label="Correo electrónico">
            <i class="fa-solid fa-envelope"></i>
        </a>

        <!-- Teléfono -->
        <a href="tel:+573212296846"
           aria-label="Llamar al parque">
            <i class="fa-solid fa-phone"></i>
        </a>

        <!-- Instagram -->
        <a class="Flotante_Instagram"
           href="https://www.instagram.com/ecoparkelrincon/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <!-- Facebook -->
        <a class="Flotante_Facebook"
           href="https://www.facebook.com/share/1EtJnbssTR/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
        </a>

        <!-- TikTok -->
        <a class="Flotante_Tiktok"
           href="https://www.tiktok.com/@ecoparkelrincon"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="TikTok">
            <i class="fa-brands fa-tiktok"></i>
        </a>

    </div>
`;

document.body.appendChild(contenedorFlotante);


const botonContacto = contenedorFlotante.querySelector(".Contacto_Flotante_Boton");
const opcionesContacto = contenedorFlotante.querySelector(".Contacto_Flotante_Opciones");

botonContacto.addEventListener("click", () => {
    opcionesContacto.classList.toggle("abierto");
});