export const Producto = (nombre, image, marca, productoId,precio) => `
<div class="product-list-card-container">
  <div class="product-list-card">
    <div class="product-list-card-body">
      <!-- Make the image clickable -->
      <a href="../view/AgregarProductoSingular.html?productoId=${productoId}">
        <div class="product-list-card-img-actions">
          <img id="img1" class="product-list-card-img img-fluid" alt="" src="${image}">
        </div>
      </a>
    </div>
    <div class="product-list-card-body bg-light text-center">
      <div class="mb-2">
        <h6 class="font-weight-semibold mb-2">
          <a id="nombre1" href="../view/AgregarProductoSingular.html?productoId=${productoId}" class="text-default mb-" data-abc="true">
            ${nombre} ${marca}
          </a>
        </h6>
      </div>
    </div>
    <!-- Add the price at the bottom left -->
    <div class="product-list-card-price">
      $${precio}
    </div>
  </div>
</div>



`;

