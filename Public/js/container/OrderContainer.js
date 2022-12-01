import { Order } from "../components/Order.js";
import { getOrdenes } from "../services/fetchServices.js";

const renderOrdenes = (json) =>{
    
    let _root = document.getElementById("ordenes-content");
    _root.innerHTML=("");
    var contador = 1;
    Object.values(json).forEach(orden => {
        let contado= contador+1;
        _root.innerHTML+=Order(orden.fecha,orden.total);
    });
}


export const OrdenesRender = (desde,hasta) => {
    getOrdenes(desde,hasta,  renderOrdenes );
}