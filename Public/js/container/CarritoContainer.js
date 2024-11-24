import { CarritoView } from "../components/CarritoView.js";
import { getCarritoById } from "../services/fetchServices.js";
import { CarritoVacio } from "../components/CarritoVacio.js";
import { NoUser } from "../components/NoUser.js";  
import { CompraDone, modifyProduct, DeleteProduct, DeleteCarrito } from "../services/fetchServices.js";


const userId = localStorage.getItem('UserId');


const renderCarrito = (json) => {
  let _root = document.getElementById("carrito-card");
  
  if (!userId) {
    _root.innerHTML = NoUser();  
    return; 
  }

  _root.innerHTML = "";
  let totalPrice = 0;

  if (json != undefined && json.carritoProductos.length > 0) {
    let carritoProductos = json.carritoProductos;

    carritoProductos.forEach((carritoProducto, index) => {
      let producto = carritoProducto.producto;
      let cantidad = carritoProducto.cantidad;
      let productoId = carritoProducto.productoId;

      let productTotalPrice = producto.precio * cantidad;
      totalPrice += productTotalPrice;

      const onIncrease = () => {
        carritoProducto.cantidad += 1;
        modifyProduct(1, userId, productoId); 
        renderCarrito(json); 
      };

      const onDecrease = () => {
        if (carritoProducto.cantidad > 1) {
          carritoProducto.cantidad -= 1; 
          modifyProduct(-1, userId, productoId); 
          renderCarrito(json); 
        } else {
          onDelete(index);  
        }
      };

      
      const onDelete = (index) => {
        const popup = _root.querySelector(`.carrito-delete-popup[data-index="${index}"]`);
        const deleteBtn = _root.querySelector(`.delete-btn[data-index="${index}"]`);
        popup.style.display = 'block';

        
        deleteBtn.style.backgroundColor = 'blue';

        
        const confirmDelete = popup.querySelector('.confirm-delete');
        const cancelDelete = popup.querySelector('.cancel-delete');

        confirmDelete.addEventListener('click', () => {
          json.carritoProductos = json.carritoProductos.filter(item => item.productoId !== productoId);
          DeleteProduct(userId, productoId); 
          renderCarrito(json); 
        });

        cancelDelete.addEventListener('click', () => {
          popup.style.display = 'none';
          deleteBtn.style.backgroundColor = ''; 
        });
      };

      
      const productHTML = CarritoView(
        producto.nombre,
        producto.precio,
        producto.image,
        producto.marca,
        carritoProducto.cantidad,
        producto.descripcion,
        productTotalPrice,  
        onIncrease,
        onDecrease,
        () => onDelete(index), 
        index 
      );

      _root.insertAdjacentHTML("beforeend", productHTML);

      const deleteBtn = _root.querySelector(`.delete-btn[data-index="${index}"]`);
      const decreaseBtn = _root.querySelector(`.decrease-btn[data-index="${index}"]`);
      const increaseBtn = _root.querySelector(`.increase-btn[data-index="${index}"]`);

      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => onDelete(index)); 
      }

      if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => onDecrease(index)); 
      }

      if (increaseBtn) {
        increaseBtn.addEventListener('click', () => onIncrease(index)); 
      }
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
    DeleteCarrito(userId);
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
