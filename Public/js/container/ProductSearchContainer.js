import { Producto } from "../components/ProductList.js";
import { getProductosName } from "../services/fetchServices.js";

const renderProductos = (json) => {
    let _root = document.getElementById("producto-lista");
    let noProductMessage = document.getElementById("no-product-message");

   
    _root.innerHTML = '';  

    if (json && json.length > 0) {
        Object.values(json).forEach(producto => {
            _root.innerHTML += Producto(producto.nombre, producto.image, producto.marca, producto.productoId, producto.precio);
        });

        if (noProductMessage) {
            noProductMessage.style.display = 'none'; 
        }
    } else {

        if (noProductMessage) {
            noProductMessage.style.display = 'flex';  
        }
    }
};


export const ProductosRender = (Busca) => {

        getProductosName(Busca, '', renderProductos);
  
};


window.onload = () => {

    
        const nameQuery = localStorage.getItem('searchQuery');
        if (nameQuery) {
        
            console.log("Buscando productos para:", nameQuery);
            ProductosRender(nameQuery);  
            
            localStorage.removeItem('searchQuery');
        } else {
            console.log("No hay parámetro de búsqueda, mostrando todos los productos");
            ProductosRender('');  
        }
    
};


