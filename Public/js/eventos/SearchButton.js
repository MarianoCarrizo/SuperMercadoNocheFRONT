import { ProductosRender} from "../container/ProductSearchContainer.js";


document.getElementById("boton-busqueda").addEventListener("click", buscarProductos);
function buscarProductos() {
    
    console.log("Se escucha el evento")
    let e = document.getElementById("productos-index");
    e.innerHTML=("");
    let busca=document.getElementById("Busca").value
    debugger;
    ProductosRender(busca)
}