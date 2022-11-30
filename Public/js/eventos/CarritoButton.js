import { CarritoRender} from "../container/CarritoContainer.js";


document.getElementById("boton-log").addEventListener("click", buscarProductos);



function buscarProductos() {
    
    console.log("Se escucha el evento")
    let e = document.getElementById("carrito-card");
    e.innerHTML=("");
    let busca=document.getElementById("ingresar-id").value
    const userId = localStorage.setItem('UserId',busca);
    debugger;
    CarritoRender(busca)
}