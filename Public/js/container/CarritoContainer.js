import { CarritoView } from "../components/CarritoView.js";
import { getCarritoById } from "../services/fetchServices.js";
import {CarritoVacio} from "../components/CarritoVacio.js"

const renderCarrito = (json) =>{
    
    if(json != null){
    let _root = document.getElementById("carrito-card");
    let carritoProductos = json.carritoProductos;
    Object.values(carritoProductos).forEach(carritoProducto => {
        let producto = carritoProducto.producto
        _root.innerHTML+=CarritoView(carritoProducto.cantidad,producto.precio,producto.image,producto.marca,producto.descripcion,producto.nombre);
    });
}else{
let _root = document.getElementById("carrito-card");
_root.innerHTML+=CarritoVacio("");
}
}




export const CarritoRender = (clienteid) => {

    getCarritoById(clienteid,renderCarrito)
        



    
}