import { CarritoView } from "../components/CarritoViewDelete.js";
import { getCarritoById } from "../services/fetchServices.js";
import {CarritoVacio} from "../components/CarritoVacio.js"


const renderCarrito = (json) =>{
    let carritoProductos = json.carritoProductos;
    if(carritoProductos.length  > 0){
    let _root = document.getElementById("carrito-card");
   
    Object.values(carritoProductos).forEach(carritoProducto => {
        let producto = carritoProducto.producto
        _root.innerHTML+=CarritoView(carritoProducto.cantidad,producto.precio,producto.image,producto.marca,producto.descripcion,producto.nombre,producto.productoId);
    });
}else{
let _root = document.getElementById("carrito-card");
_root.innerHTML+=CarritoVacio("");
}
}




export const CarritoRender = (clienteid) => {

    getCarritoById(clienteid,renderCarrito)
        
}