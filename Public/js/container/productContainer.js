import { getProductos } from "../services/fetchServices.js";

const renderProductos = (json, targetId) => {
    let _root = document.getElementById(targetId);

    let cardsBatch = [];
    let cardCount = 0;

    Object.values(json).forEach((producto, index) => {
        let cardHTML = `
            <div class="card-container">
                <div class="card">
                    <div class="card-body">
                        <div class="card-img-actions">
                            <img id="img1" class="card-img img-fluid" alt="" src="${producto.image}">
                        </div>
                    </div>
                    <div class="card-body bg-light text-center">
                        <div class="mb-2">
                            <h6 class="font-weight-semibold mb-2">
                                <a id="nombre1" href="../view/AgregarProductoSingular.html?productoId=${producto.productoId}" class="text-default mb-" data-abc="true">
                                    ${producto.nombre} ${producto.marca}
                                </a>
                            </h6>
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
    getProductos((json) => renderProductos(json, 'productos-index-1'));
    getProductos((json) => renderProductos(json, 'productos-index-2'));
    getProductos((json) => renderProductos(json, 'productos-index-3'));
};
