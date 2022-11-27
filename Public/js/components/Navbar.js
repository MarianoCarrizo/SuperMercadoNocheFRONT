export const navbar = (name) => `
<nav class="navbar navbar-toggleable-lg fixed-top navbar-light bg-primary ">
				<a class="navbar-brand" href="#">
					<img src="../img/favicon.png" width="40" height="40" alt="">
				  </a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="navbar-toggler-icon"></span>
				</button> <a class="navbar-brand" href="../view/Index.html">Supermercado Noche</a>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="navbar-nav">
						<li class="navbar-light">
							 <a class="nav-link" href="../view/Index.html">Inicio<span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Carrito</a>
						   <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a class="dropdown-item" href="../view/CarritoVista.html?id=1">Ver Carrito</a> 
								<a class="dropdown-item" href="../view/EliminarProducto.html">Eliminar Productos</a> 
								<a class="dropdown-item" href="../view/ConfirmacionCompra.html">Confirmar Compra</a>
						   </div>
					   </li>
					</li>
					<li class="nav-item">
					 <a class="nav-link" href="../view/ListaProductosVista.html">Lista De productos</a>
				</li>
					 
					   <li class="nav-item">
						<a class="nav-link" href="../view/VentasDelDiaVista.html">Ventas del día</a>
				   </li>				
				   <form class="form-inline">
				   <input class="form-control mr-sm-2" id="Busca" placeholder="Buscar Producto..." type="text"> 
				   <a href="../view/Search.html?name=${name}" <button Class="btn button-search my-2 my-sm-0" id="boton-busqueda" type="bttn">Buscar</button></a>

			   </form>
			
				</div>
			</nav>
`