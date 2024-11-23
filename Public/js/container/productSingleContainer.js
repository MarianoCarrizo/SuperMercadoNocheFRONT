import { Producto } from "../components/ProductoCompra.js";
import { getProductoById } from "../services/fetchServices.js";
import { AgregadoRender } from "../container/CarritoAgregarContainer.js"; // Import the AgregadoRender function

const bindButtonEvents = () => {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const compraButton = document.getElementById('compra-button');
    const compraInput = document.getElementById('compra-form');

    if (decreaseButton && increaseButton && compraButton) {
        
        decreaseButton.addEventListener('click', function () {
            let cantidad = parseInt(compraInput.value);
            if (cantidad > 1) {
                compraInput.value = cantidad - 1;
            }
        });

        increaseButton.addEventListener('click', function () {
            let cantidad = parseInt(compraInput.value);
            compraInput.value = cantidad + 1;
        });

        compraButton.addEventListener('click', function () {
            console.log("Se escucha el evento Agregar");

            let cantidad = compraInput.value;
            let userId = localStorage.getItem("UserId"); 
            let productoId = localStorage.getItem("productoId"); 

            console.log("Cantidad:", cantidad);
            console.log("UserId:", userId);
            console.log("ProductoId:", productoId);

            AgregadoRender(cantidad, userId, productoId); 
        });
    }
};

const renderProductos = (json) => {
    let _root = document.getElementById("producto-index");

    let nombre = json.nombre;
    let marca = json.marca;
    let precio = json.precio;
    let image = json.image;
    let id = json.productoId; 

    _root.innerHTML = Producto(nombre, marca, precio, image, id);
    
    console.log("ProductoId:", id);

    bindButtonEvents();
}

export const SingleProductRender = (id) => {

    getProductoById(localStorage.getItem("productoId"), renderProductos);  
}

