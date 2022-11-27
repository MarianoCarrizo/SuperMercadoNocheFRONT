import { OrdenesRender} from "../container/OrderContainer.js";

document.getElementById("Order-button").addEventListener("click", buscarOrdenes);
function buscarOrdenes() {
    
    console.log("Se escucha el evento")
    let desde=document.getElementById("desde").value

    let hasta=document.getElementById("hasta").value

    debugger;
    OrdenesRender(desde,hasta)
}