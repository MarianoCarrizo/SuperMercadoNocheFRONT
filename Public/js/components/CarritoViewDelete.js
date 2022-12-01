export const CarritoView = (nombre,precio,image,marca,cantidad,descripcion,productoId) => `
<div class="card rounded-3 mb-4">
          <div class="card-body p-4">
          <p>ID  : ${productoId}</p>
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="${image}"
                  class="img-fluid rounded-3" alt="Cotton T-shirt">
              </div>
              
              <div class="col-md-3 col-lg-3 col-xl-3">
              
                <p class="lead fw-normal mb-2">${descripcion}</p>
                
                <p>${marca}</p>
              </div>
              
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

				<div>cantidad  ${nombre}</div>
              </div>
              
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$${precio}</h5>
              </div>
              
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

`