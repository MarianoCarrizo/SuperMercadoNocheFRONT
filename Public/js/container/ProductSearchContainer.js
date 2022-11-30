import { Producto } from "../components/ProductList.js";
import { getProductosName } from "../services/fetchServices.js";

const renderProductos = (json) =>{
    debugger;

    let _root = document.getElementById("productos-index");
    
    Object.values(json).forEach(producto => {
        _root.innerHTML+=Producto(producto.nombre, producto.precio, producto.image,producto.marca,producto.productoId,producto.descripcion);
    });

}


export const ProductosRender = (Busca) => {
    debugger;
    getProductosName(Busca,  renderProductos );
}