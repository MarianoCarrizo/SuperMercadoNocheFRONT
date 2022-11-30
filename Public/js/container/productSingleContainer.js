import { Producto } from "../components/ProductoCompra.js";
import { getProductoById } from "../services/fetchServices.js";


const renderProductos = (json) =>{
    debugger;
    let _root = document.getElementById("producto-index");

    let nombre = json.nombre;
    let marca = json.marca;
    let precio = json.precio;
    let image = json.image;
    let id = Producto.id;
    _root.innerHTML+=Producto(nombre, marca, precio, image, id);
}

export const SingleProductRender = (id) => {
    debugger;
    const productoId = localStorage.setItem('productoId',id);
    getProductoById(id, renderProductos);
}