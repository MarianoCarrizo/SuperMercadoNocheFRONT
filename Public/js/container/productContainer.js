import { Producto } from "../components/producto.js";
import { getProductos } from "../services/fetchServices.js";
import { navbar } from "../components/Navbar.js";

const renderProductos = (json) =>{
    let _root = document.getElementById("productos-index");
    let navbarRoot = document.getElementById("nav-bar");
    navbarRoot.innerHTML += navbar;
    Object.values(json).forEach(producto => {
        _root.innerHTML+=Producto(producto.nombre, producto.precio, producto.image,producto.marca,producto.productoId);
    });

}

export const ProductosRender = () => {
    getProductos(renderProductos);
}