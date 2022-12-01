import { CarritoView } from "../components/CarritoView.js";
import { getCarritoById } from "../services/fetchServices.js";
import {CarritoVacio} from "../components/CarritoVacio.js"

const renderCarrito = (json) =>{
    let _root = document.getElementById("carrito-card");
    _root.innerHTML=("");
    if(json != undefined){
    let carritoProductos = json.carritoProductos;
    let _root = document.getElementById("carrito-card");
    Object.values(carritoProductos).forEach(carritoProducto => {
        let producto = carritoProducto.producto
        _root.innerHTML+=CarritoView(carritoProducto.cantidad,producto.precio,producto.image,producto.marca,producto.descripcion,producto.nombre);
    });

}else{_root.innerHTML+=CarritoVacio("");}


}




export const CarritoRender = (clienteid) => {

    getCarritoById(clienteid,renderCarrito)
        



    
}