export const Producto = (nombre,precio,image,marca,productoId,descripcion) => `
<div class="col-md-12">
            
<div class="card card-body">
            <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                <div class="mr-2 mb-3 mb-lg-0">
                    
                        <img src="${image}" width="150" height="150" alt="">
                   
                </div>
                <div class="media-body">
                    <h2 class="media-title font-weight-semibold">
                        <a href="../view/AgregarProductoSingular.html?productoId=${productoId}" data-abc="true">${nombre} ${marca}</a>
                    </h2>

                    ${descripcion}
                </div>

                <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                    <h3 class="mb-0 font-weight-semibold">$${precio}</h3>

                    <form>
			<a href="../view/AgregarProductoSingular.html?productoId=${productoId}"<button Class="bttn">Agregar al Carrito</button></a>
			</form>
                </div>
            </div>
        </div>
`