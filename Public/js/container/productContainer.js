import { Producto } from "../components/producto.js";
import { getProductos } from "../services/fetchServices.js";

const renderProductos = (json) =>{
  
    let _root = document.getElementById("productos-index");

    Object.values(json).forEach(producto => {
        _root.innerHTML+=Producto(producto.nombre, producto.precio, producto.image,producto.marca,producto.productoId);
    });

}

export const ProductosRender = () => {
    getProductos(renderProductos);
}