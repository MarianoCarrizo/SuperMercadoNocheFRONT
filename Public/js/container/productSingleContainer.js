import { Producto } from "../components/ProductoCompra.js";
import { getProductoById } from "../services/fetchServices.js";
import { AgregadoRender } from "../container/CarritoAgregarContainer.js"; // Import the AgregadoRender function

// Function to attach event listeners to the buttons inside the rendered component
const bindButtonEvents = () => {
    // Decrease quantity button
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const compraButton = document.getElementById('compra-button');
    const compraInput = document.getElementById('compra-form');

    // Ensure the buttons exist before attaching event listeners
    if (decreaseButton && increaseButton && compraButton) {
        // Decrease quantity button
        decreaseButton.addEventListener('click', function () {
            let cantidad = parseInt(compraInput.value);
            if (cantidad > 1) {
                compraInput.value = cantidad - 1;
            }
        });

        // Increase quantity button
        increaseButton.addEventListener('click', function () {
            let cantidad = parseInt(compraInput.value);
            compraInput.value = cantidad + 1;
        });

        // "Agregar" button (add to cart functionality)
        compraButton.addEventListener('click', function () {
            console.log("Se escucha el evento Agregar");

            let cantidad = compraInput.value;
            let userId = localStorage.getItem("UserId"); // Get userId from localStorage
            let productoId = localStorage.getItem("productoId"); // Get productoId from localStorage

            console.log("Cantidad:", cantidad);
            console.log("UserId:", userId);
            console.log("ProductoId:", productoId);

            // Call AgregadoRender to add the product to the cart
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
    let id = json.productoId; // Make sure to use json.id instead of Producto.id

    // Insert the product HTML
    _root.innerHTML = Producto(nombre, marca, precio, image, id);

    // Save the product id to localStorage (so we can access it later in AgregadoRender)
    
    console.log("ProductoId:", id);

    // Rebind the event listeners after the new HTML is inserted
    bindButtonEvents();
}

export const SingleProductRender = (id) => {
    // Store the product id in localStorage before rendering the product

    getProductoById(localStorage.getItem("productoId"), renderProductos);  // Fetch product details and render them
}

