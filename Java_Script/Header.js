document.querySelector("#header").innerHTML = `

<header>

    <div class="Header_Container">

        <div class="Logo_Header">
             <a href="index.html">
        <img 
            src="Assets/png/Logo_Rincon_Png.png" 
            alt="Parque Ecológico El Rincón"
        >
    </a>
        </div>


        <nav class="menu">
        <button class="Menu_Hamburguesa" aria-label="Abrir menú">
    <i class="fa-solid fa-bars"></i>
</button>
              
            <ul>

                <li>
                    <a href="index.html">Inicio</a>
                </li>

                <li>
                    <a href="Nuestra_Historia.html">Quiénes Somos</a>
                </li>
                <li>
                    <a href="Tu_Visita.html">Tu visita</a>
                </li>

                <li>
                    <a href="Atracciones.html">Atracciones</a>
                </li>

                <li>
                    <a href="Como_Llegar.html">Cómo Llegar</a>
                </li>

                <li class="Contacto_Menu">
                    <a href="Contacto.html">Contacto</a>
                </li>

            </ul>

        </nav>


        <div class="Social_Media">

    <a href="https://www.instagram.com/ecoparkelrincon/" 
       aria-label="Instagram"
       target="_blank"
       rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://www.facebook.com/share/1EtJnbssTR/" 
       aria-label="Facebook"
       target="_blank"
       rel="noopener noreferrer">
        <i class="fa-brands fa-facebook"></i>
    </a>

    <a href="https://www.tiktok.com/@ecoparkelrincon" 
       aria-label="TikTok"
       target="_blank"
       rel="noopener noreferrer">
        <i class="fa-brands fa-tiktok"></i>
    </a>

    <a href="https://wa.me/573212296846" 
       aria-label="WhatsApp"
       target="_blank"
       rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

</div>

    </div>

</header>

`;

const paginaActual = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu a").forEach((enlace) => {
    if (enlace.getAttribute("href") === paginaActual) {
        enlace.classList.add("pagina-activa");
    }
});

const botonMenu = document.querySelector(".Menu_Hamburguesa");
const menu = document.querySelector(".menu ul");
botonMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-abierto");

    const icono = botonMenu.querySelector("i");

    if (menu.classList.contains("menu-abierto")) {
        icono.classList.remove("fa-bars");
        icono.classList.add("fa-xmark");
    } else {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
    }
});