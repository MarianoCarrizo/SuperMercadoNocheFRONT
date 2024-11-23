import { CarritoView } from "../components/CarritoView.js";
import { getCarritoById } from "../services/fetchServices.js";
import {CarritoVacio} from "../components/CarritoVacio.js"
import { CompraDone } from "../services/fetchServices.js";
import { modifyProduct } from "../services/fetchServices.js";


const userId = localStorage.getItem('UserId');

const renderCarrito = (json) => {
    let _root = document.getElementById("carrito-card");
    _root.innerHTML = ""; // Clear the cart content
    
    let totalPrice = 0;
  
    if (json != undefined) {
      let carritoProductos = json.carritoProductos;
  
     
      carritoProductos.forEach((carritoProducto, index) => {
        let producto = carritoProducto.producto;
        let cantidad = carritoProducto.cantidad; 
        let productoId = carritoProducto.productoId;
  
        totalPrice += cantidad * producto.precio;
  
        const onIncrease = () => {
          const newCantidad = 1;
          carritoProducto.cantidad = cantidad + newCantidad 
          modifyProduct(newCantidad, userId, productoId);
          renderCarrito(json); 
        };
  
        const onDecrease = () => {
          if (cantidad > 1) {
            const newCantidad = -1
            carritoProducto.cantidad = cantidad + newCantidad
            modifyProduct(newCantidad, userId, productoId);
            renderCarrito(json); 
          } else {
            console.log("Cantidad can't be less than 1");
          }
        };
  
        const productHTML = CarritoView(
          producto.nombre,
          producto.precio,
          producto.image,
          producto.marca,
          carritoProducto.cantidad, 
          producto.descripcion,
          onIncrease,
          onDecrease
        );

        _root.insertAdjacentHTML("beforeend", productHTML);
  
        const decreaseBtn = _root.querySelectorAll('.decrease-btn')[index];
        
        const increaseBtn = _root.querySelectorAll('.increase-btn')[index];
        const quantitySpan = _root.querySelectorAll('.carrito-quantity')[index];

        decreaseBtn.addEventListener('click', () => {
          onDecrease();
          console.log("Decrease clicked");
          quantitySpan.textContent = carritoProducto.cantidad; 
        });
  
        increaseBtn.addEventListener('click', () => {
          onIncrease();
          console.log("Increase clicked");
          quantitySpan.textContent = carritoProducto.cantidad; 
        });
      });
  
      _root.insertAdjacentHTML("beforeend", `
        <div class="comprar-container">
          <h5>Total: $${totalPrice}</h5>
          <button id="comprar-btn" class="comprar-btn">Comprar</button>
        </div>
      `);
  
      const comprarButton = document.getElementById("comprar-btn");
      comprarButton.addEventListener("click", handlePurchase);
    } else {
      _root.innerHTML += CarritoVacio(""); 
    }
  };
  
  const handlePurchase = () => {
    CompraDone(userId, CarritoVacio);
    document.getElementById("carrito-card").innerHTML = '';
    const purchaseMessageContainer = document.getElementById("purchase-message-container");
    purchaseMessageContainer.style.display = 'block'; 
  };
  
  export const CarritoRender = (clienteid) => {
    getCarritoById(clienteid, renderCarrito);
  };
  