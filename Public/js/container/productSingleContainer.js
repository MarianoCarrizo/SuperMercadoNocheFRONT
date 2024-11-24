import { Producto } from "../components/ProductoCompra.js";
import { getProductoById } from "../services/fetchServices.js";
import { AgregadoRender } from "../container/CarritoAgregarContainer.js"; // Import the AgregadoRender function

const bindButtonEvents = () => {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const compraButton = document.getElementById('compra-button');
    const compraInput = document.getElementById('compra-form');
    const userId = localStorage.getItem("UserId");
    
    if (!userId || userId === '') {  
        if (decreaseButton) decreaseButton.style.display = 'none';
        if (increaseButton) increaseButton.style.display = 'none';
        if (compraButton) compraButton.style.display = 'none';
        if (compraInput) compraInput.style.display = 'none'; 
    } else {

        if (decreaseButton) {
            decreaseButton.addEventListener('click', function () {
                let cantidad = parseInt(compraInput.value);
                if (cantidad > 1) {
                    compraInput.value = cantidad - 1;
                }
            });
        }

        if (increaseButton) {
            increaseButton.addEventListener('click', function () {
                let cantidad = parseInt(compraInput.value);
                compraInput.value = cantidad + 1;
            });
        }

        if (compraButton) {
            compraButton.addEventListener('click', function () {
                let cantidad = compraInput.value;
                let userId = localStorage.getItem("UserId");
                let productoId = localStorage.getItem("productoId"); 
                AgregadoRender(cantidad, userId, productoId); 
            });
        }
    }
};

const renderProductos = (json) => {
    let _root = document.getElementById("producto-index");

    let nombre = json.nombre;
    let marca = json.marca;
    let precio = json.precio;
    let image = json.image;
    let id = json.productoId; 
    const isUserLoggedIn = localStorage.getItem("UserId") !== null;
    _root.innerHTML = Producto(nombre, marca, precio, image, isUserLoggedIn);

    bindButtonEvents();
}

export const SingleProductRender = (id) => {
    getProductoById(localStorage.getItem("productoId"), renderProductos);  
}
