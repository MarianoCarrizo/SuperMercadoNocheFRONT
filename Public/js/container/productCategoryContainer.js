import { getProductosByCategory } from "../services/fetchServices.js";

const renderProductos = (json, targetId) => {
    let _root = document.getElementById(targetId);

    // Initialize an array to hold a batch of 5 cards (or whatever batch size you prefer)
    let cardsBatch = [];
    let cardCount = 0;

    // Loop through the products
    Object.values(json).forEach((producto, index) => {
        // Generate the HTML for a single product card
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

        // Push the current card to the batch
        cardsBatch.push(cardHTML);
        cardCount++;

        // After 5 cards, create a carousel-item and reset the batch
        if (cardCount === 5 || index === json.length - 1) {
            // Create the carousel item for the batch
            let carouselItemHTML = `<div class="carousel-item ${index === 4 ? 'active' : ''}">`;
            carouselItemHTML += `<div class="row">${cardsBatch.join('')}</div>`; // Wrap cards in a row
            carouselItemHTML += `</div>`;

            // Append the carousel item to the carousel inner
            _root.innerHTML += carouselItemHTML;

            // Reset the batch for the next 5 cards
            cardsBatch = [];
            cardCount = 0;
        }
    });
};

export const ProductosRender = () => {
    // Render the first carousel
    getProductosByCategory("almacen",(json) => renderProductos(json, 'productos-category-1'));

    // Render the second carousel
    getProductosByCategory("cuidado",(json) => renderProductos(json, 'productos-category-2'));

    // Render the third carousel
    getProductosByCategory("limpieza",(json) => renderProductos(json, 'productos-category-3'));
};
