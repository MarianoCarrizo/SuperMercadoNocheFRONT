// Este script guarda el término de búsqueda en localStorage y redirige a la página de resultados

const botonBusqueda = document.getElementById("boton-busqueda");
const inputBusqueda = document.getElementById("Busca");

botonBusqueda.addEventListener("click", function () {
    guardarYRedirigir();
});

inputBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();  
        guardarYRedirigir();    
    }
});

function guardarYRedirigir() {
    const searchQuery = inputBusqueda.value.trim();  
    if (searchQuery !== "") {
        localStorage.setItem("searchQuery", searchQuery);
        window.location.href = '/view/ListaProductosVista.html';
    } else {
        window.location.href = '/view/ListaProductosVista.html';  
    }
}
