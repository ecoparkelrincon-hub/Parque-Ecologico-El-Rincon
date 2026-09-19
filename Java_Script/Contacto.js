const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);

    const respuesta = await fetch(formulario.action, {
        method: "POST",
        body: datos,
        headers: {
            "Accept": "application/json"
        }
    });

    if (respuesta.ok) {
    formulario.innerHTML = `
        <h2>¡MENSAJE ENVIADO!</h2>
        <p>Gracias por escribirnos.<br>
        Te responderemos lo más pronto posible.</p>
    `;
}
});