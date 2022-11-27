import { Producto } from "../components/ProductList.js";
import { getProductos } from "../services/fetchServices.js";

const renderProductos = (json) =>{
    let _root = document.getElementById("producto-lista");
    Object.values(json).forEach(producto => {
        _root.innerHTML+=Producto(producto.nombre, producto.precio, producto.image,producto.marca,producto.productoId,producto.descripcion);
    });

}

export const ProductosRender = () => {
    getProductos(renderProductos);
}