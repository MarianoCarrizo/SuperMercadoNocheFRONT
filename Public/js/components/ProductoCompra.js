export const Producto = (nombre,marca, precio, image) => `
<div class="col d-flex justify-content-center" >
    <div class="card" >
        <div class="card-body" align="center">
            <div class="card-img-actions">
                <img id="img1" class="card-img img-fluid" width="206" height="450" alt="" src="${image}">
			</div>
		</div>
		<div class="card-body bg-light text-center">
            <div class="mb-12">
				<h6 class="font-weight-semibold mb-2">
					<a id ="nombre1" href="#" class="text-default mb-2" data-abc="true">${nombre} ${marca}</a>
				</h6>
			</div>
			<h3 id="precio1" class="mb-0 font-weight-semibold">$${precio}</h3>
		</div>
	</div>
</div>
`