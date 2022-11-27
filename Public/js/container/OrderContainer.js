import { Order } from "../components/Order.js";
import { getOrdenes } from "../services/fetchServices.js";
import { navbar } from "../components/Navbar.js";

const renderOrdenes = (json) =>{
    
    let _root = document.getElementById("ordenes-content");
    _root.innerHTML = "";
    let navbarRoot = document.getElementById("nav-bar");
    navbarRoot.innerHTML += navbar;
    Object.values(json).forEach(orden => {
        _root.innerHTML+=Order(orden.numero=+1,orden.fecha,orden.total);
    });
}


export const OrdenesRender = (desde,hasta) => {
    getOrdenes(desde,hasta,  renderOrdenes );
}