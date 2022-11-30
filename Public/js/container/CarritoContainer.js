import { CarritoView } from "../components/CarritoView.js";
import { getCarritoById } from "../services/fetchServices.js";

const renderCarrito = (json) =>{
    
    let _root = document.getElementById("carrito-card");
    Object.values(json).forEach(carritoproductos => {
        _root.innerHTML+=CarritoView( carritoproductos.cantidad,
        carritoproductos.producto.nombre,
        carritoproductos.clienteid,
        carritoproductos.producto.descripcion,
        carritoproductos.producto.marca,
        carritoproductos.producto.precio,
        carritoproductos.producto.image );
    });
}


export const CarritoRender = (clienteid) => {
    getCarritoById(clienteid,  renderCarrito );
}