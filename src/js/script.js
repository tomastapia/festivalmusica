document.addEventListener("DOMContentLoaded", function() {
    crearGaleria()
})

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement("img")
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = "Imagen Galería"
        // Event Handler
        imagen.onclick = function() {
            mostrarImegen(i)
        }
        galeria.appendChild(imagen)
    }
}

function mostrarImegen(i) {
    const imagen = document.createElement("img")
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = "Imagen Galería"
    // Generar Modal
    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    // Botón cerrar modal
    const cerrarModalBtn = document.createElement("BUTTON")
    cerrarModalBtn.textContent = "x"
    cerrarModalBtn.classList.add("btn-cerrar")
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    // Agregar al HTML
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("fade-out")
    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector("body")
        body.classList.remove("overflow-hidden")
    }, 300);


}