import { CarritoView } from "../components/CarritoViewDelete.js";
import { DeleteProduct } from "../services/fetchServices.js";
import {CarritoVacio} from "../components/CarritoVacio.js"

const renderDelete = (json) =>{
    
let _root = document.getElementById("producto-index");
_root.innerHTML=productoAgregado("")
if(json != null){
    let _root = document.getElementById("carrito-card");
    let carritoProductos = json.carritoProductos;
    Object.values(carritoProductos).forEach(carritoProducto => {
        let producto = carritoProducto.producto
        _root.innerHTML+=CarritoView(carritoProducto.cantidad,producto.precio,producto.image,producto.marca,producto.descripcion,producto.nombre,);
    });
}else{
let _root = document.getElementById("carrito-card");
_root.innerHTML+=CarritoVacio("");
}
}


export const deleteRender = (userId,productoId) => {
    DeleteProduct(userId,productoId, renderDelete );
    location.reload();
}