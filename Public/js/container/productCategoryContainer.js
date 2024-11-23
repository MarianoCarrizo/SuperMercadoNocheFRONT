import { getProductosByCategory } from "../services/fetchServices.js";

const renderProductos = (json, targetId) => {
    let _root = document.getElementById(targetId);

    let cardsBatch = [];
    let cardCount = 0;

    Object.values(json).forEach((producto, index) => {

        let cardHTML = `
<div class="card-container">
    <div class="card">
        <div class="card-body" style="position: relative; padding-bottom: 20px;">
            <!-- Make the image clickable -->
            <a href="../view/AgregarProductoSingular.html?productoId=${producto.productoId}">
                <div class="card-img-actions">
                    <img id="img1" class="card-img img-fluid" alt="" src="${producto.image}">
                </div>
            </a>
        </div>
        <div class="card-body bg-light text-center" style="position: relative;">
            <div class="mb-2" style="position: absolute; top: -15px; left: 10px; right: 10px; text-align: center;">
                <!-- Product name above price -->
                <h6 class="font-weight-semibold mb-2" style="font-size: 15px;">
                    <a id="nombre1" href="../view/AgregarProductoSingular.html?productoId=${producto.productoId}" class="product-link mb-" data-abc="true">
                        ${producto.nombre} ${producto.marca}
                    </a>
                </h6>
            </div>
            <!-- Price directly below the product name -->
            <div class="mb-2" style="font-size: 17px; margin-top: 50px; margin-right: 150px;">
                <p class="font-weight-bold text-success">$${producto.precio}</p>
            </div>
        </div>
    </div>
</div>



        `;

        cardsBatch.push(cardHTML);
        cardCount++;

        
        if (cardCount === 5 || index === json.length - 1) {
        
            let carouselItemHTML = `<div class="carousel-item ${index === 4 ? 'active' : ''}">`;
            carouselItemHTML += `<div class="row">${cardsBatch.join('')}</div>`; 
            carouselItemHTML += `</div>`;

            _root.innerHTML += carouselItemHTML;

            cardsBatch = [];
            cardCount = 0;
        }
    });
};

export const ProductosRender = () => {
   
    getProductosByCategory("almacen",(json) => renderProductos(json, 'productos-category-1'));
    getProductosByCategory("cuidado",(json) => renderProductos(json, 'productos-category-2'));
    getProductosByCategory("limpieza",(json) => renderProductos(json, 'productos-category-3'));
};
