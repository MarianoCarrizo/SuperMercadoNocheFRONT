import { Order } from "../components/Order.js";
import { getOrdenes } from "../services/fetchServices.js";

const renderOrdenes = (json) =>{
    
    let _root = document.getElementById("ordenes-content");
    _root.innerHTML = "";
    Object.values(json).forEach(orden => {
        _root.innerHTML+=Order(orden.numero=+1,orden.fecha,orden.total);
    });
}


export const OrdenesRender = (desde,hasta) => {
    getOrdenes(desde,hasta,  renderOrdenes );
}