import { compraRender} from "../container/CompraContainer.js";


document.getElementById("confirmar-compra").addEventListener("click", buscarProductos);



function buscarProductos() {
    
    console.log("Se escucha el evento")
    let e = document.getElementById("carrito-card");
    let a = document.getElementById("borrar");
    e.innerHTML=("");
    a.innerHTML=("");
    let UserId = localStorage.getItem("UserId");
    debugger;
    compraRender(UserId)
}