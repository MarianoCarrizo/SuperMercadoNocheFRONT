export const Producto = (nombre,precio,image,marca,productoId,descripcion) => `
<div class="col-md-12">
            
<div class="container card card-body">
            <div class="media text-lg-left  flex-lg-row">
                <div class="">
                    
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