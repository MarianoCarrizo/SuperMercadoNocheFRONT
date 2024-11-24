export const CarritoView = (nombre, precio, image, marca, cantidad, descripcion, totalPrice, onIncrease, onDecrease, onDelete, index) => `
  <div class="carrito-card" data-index="${index}">
    <div class="carrito-card-body">

      <!-- Product Image -->
      <div class="carrito-img">
        <img src="${image}" alt="${nombre}" class="carrito-img-img">
      </div>

      <!-- Product Info -->
      <div class="carrito-info">
        <h6 class="carrito-title">${nombre}</h6>
        <p class="carrito-description">${descripcion}</p>
        <p class="carrito-brand">${marca}</p>
      </div>

      <!-- Quantity & Controls -->
      <div class="carrito-controls">
        <!-- Show trashcan icon button if quantity == 1, else show decrease button -->
        ${cantidad > 1 ? 
          `<button class="carrito-btn decrease-btn" data-index="${index}">-</button>` : 
          `<button class="carrito-btn delete-btn" data-index="${index}">
            <img src="../img/trashcan.png" alt="Delete" class="trash-icon">
          </button>` 
        }
        <span class="carrito-quantity">${cantidad}</span>
        <button class="carrito-btn increase-btn" data-index="${index}">+</button>
      </div>

      <!-- Price -->
      <div class="carrito-price">
         $${totalPrice}
      </div>

      <!-- Delete Confirmation Popup (Hidden by default) -->
      <div class="carrito-delete-popup" style="display:none;" data-index="${index}">
        <div class="popup-overlay"></div>
        <div class="popup-content">
          <!-- Show only the product image in the popup -->
          <img src="${image}" alt="${nombre}" class="popup-product-img">
          <p>¿Estás seguro de que deseas eliminar este producto?</p>
          <button class="popup-btn confirm-delete" data-index="${index}">Sí</button>
          <button class="popup-btn cancel-delete" data-index="${index}">No</button>
        </div>
      </div>
    </div>
  </div>
`
