export const CarritoView = (nombre, precio, image, marca, cantidad, descripcion, onIncrease, onDecrease) => `
  <div class="carrito-card">
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
        <button class="carrito-btn decrease-btn">-</button>
        <span class="carrito-quantity">${cantidad}</span>
        <button class="carrito-btn increase-btn">+</button>
      </div>

      <!-- Price -->
      <div class="carrito-price">
        $${precio}
      </div>

      <!-- Remove Button -->
      <div class="carrito-remove">
        <a href="#!" class="carrito-remove-btn" title="Remove item">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
  </div>
`