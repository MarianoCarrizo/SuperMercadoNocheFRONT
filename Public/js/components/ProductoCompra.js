export const Producto = (nombre, marca, precio, image) => `
<div class="container-compra">
    <div class="card-singular">
        <!-- Image -->
        <div class="card-body p-0">
            <img id="img1" class="card-compra-singular-img" src="${image}">
        </div>
    </div>

    <!-- Product Info and Buttons Outside the Card, Positioned to the Right -->
    <div class="product-info">
        <!-- Product Name and Brand -->
        <div class="mb-2">
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <!-- Brand on top-left -->
                <span id="marca1" class="text-muted" style="font-size: 14px;">${marca}</span>
                <!-- Product Name below the Brand -->
                <h5 class="font-weight-semibold text-dark mb-1" style="font-size: 18px;">
                    <span id="nombre1">${nombre}</span>
                </h5>
            </div>
        </div>
        
        <!-- Product Price -->
        <h3 id="precio1" class="font-weight-semibold">$${precio}</h3>
        
        <!-- Buttons Below the Text -->
        <div class="quantity-selector mt-3 align-items-center">
            <button type="button" class="btn btn-outline-secondary" id="decrease">-</button>
            <input type="number" class="form-control" id="compra-form" value="1" min="1" readonly>
            <button type="button" class="btn btn-outline-secondary" id="increase">+</button>
        </div>
        
        <!-- 'Agregar' Button -->
        <button type="button" class="btn btn-primary mt-3" id="compra-button">Agregar</button>
    </div>
</div>



`  ;
