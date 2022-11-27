import { Producto } from "../components/ProductoCompra.js";
import { getProductoById } from "../services/fetchServices.js";
import { navbar } from "../components/Navbar.js";

const renderProductos = (json) =>{
    debugger;
    let _root = document.getElementById("producto-index");
    let navbarRoot = document.getElementById("nav-bar");
    navbarRoot.innerHTML += navbar;
    let nombre = json.nombre;
    let marca = json.marca;
    let precio = json.precio;
    let image = json.image;
    let id = Producto.id;
    _root.innerHTML+=Producto(nombre, marca, precio, image, id);
}

export const SingleProductRender = (id) => {
    debugger;
    getProductoById(id, renderProductos);
}