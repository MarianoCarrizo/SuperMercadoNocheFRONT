import { ProductosRender } from "../container/ProductSearchContainer.js";  

const botonBusqueda = document.getElementById("boton-busqueda");
const inputBusqueda = document.getElementById("Busca");
botonBusqueda.addEventListener("click", buscarProductos);

inputBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        buscarProductos(); 
    }
});

function buscarProductos() {
    const busca = inputBusqueda.value.trim(); 

    if (busca !== "") {
        const currentUrl = window.location.pathname; 
        const listaProductosPage = '/view/ListaProductosVista.html'; 

        if (currentUrl !== listaProductosPage) {
            localStorage.setItem('searchQuery', busca);
            window.location.href = `${listaProductosPage}?name=${encodeURIComponent(busca)}`;
        } else {
            console.log("Buscando productos para:", busca);
            ProductosRender(busca);  
        }
    } else {      
        console.log("Por favor ingrese un nombre para buscar");
        ProductosRender('');  
    }
}