import { Producto } from "../components/ProductList.js";
import { getProductos } from "../services/fetchServices.js";

const renderProductos = (json) => {
  let _root = document.getElementById("producto-lista");
  _root.innerHTML = '';  // Clear previous content
  Object.values(json).forEach(producto => {
    _root.innerHTML += Producto(producto.nombre, producto.image, producto.marca, producto.productoId);
  });
};

export const ProductosRender = () => {
  getProductos(renderProductos);
}
