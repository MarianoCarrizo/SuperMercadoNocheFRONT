import { Producto } from "../components/ProductList.js";
import { getProductosName } from "../services/fetchServices.js";
import { navbar } from "../components/Navbar.js";

const renderProductos = (json) =>{
    let _root = document.getElementById("producto-lista");
    let navbarRoot = document.getElementById("nav-bar");
    navbarRoot.innerHTML += navbar;
    Object.values(json).forEach(producto => {
        _root.innerHTML+=Producto(producto.nombre, producto.precio, producto.image,producto.marca,producto.productoId,producto.descripcion);
    });

}


export const ProductosRender = (Busca) => {
    getProductosName(Busca,  renderProductos );
}