import { AgregadoRender} from "../container/CarritoAgregarContainer.js";

document.getElementById("compra-button").addEventListener("click", buscarOrdenes);

function buscarOrdenes() {
    
    console.log("Se escucha el evento")
    let cantidad=document.getElementById("compra-form").value
    let userId = localStorage.getItem("UserId");
    let productoId = localStorage.getItem("productoId");
    console.log(cantidad,userId,productoId)

    debugger;
    AgregadoRender(cantidad,userId,productoId)
}