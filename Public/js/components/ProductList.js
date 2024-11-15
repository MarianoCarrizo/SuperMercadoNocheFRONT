export const Producto = (nombre, image, marca, productoId) => `
<div class="card-container">
  <div class="card">
    <div class="card-body">
      <div class="card-img-actions">
        <img id="img1" class="card-img img-fluid" alt="" src="${image}">
      </div>
    </div>
    <div class="card-body bg-light text-center">
      <div class="mb-2">
        <h6 class="font-weight-semibold mb-2">
          <a id="nombre1" href="../view/AgregarProductoSingular.html?productoId=${productoId}" class="text-default mb-" data-abc="true">
            ${nombre} ${marca}
          </a>
        </h6>
      </div>
    </div>
  </div>
</div>
`;

