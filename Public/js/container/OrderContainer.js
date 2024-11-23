import { Order } from "../components/Order.js";
import { getOrdenes } from "../services/fetchServices.js";


let currentPage = 1;  
const limit = 5; 
let totalPages = 0;


function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

const renderOrdenes = (json) => {
    let _root = document.getElementById("ordenes-content");
    _root.innerHTML = ""; 

   
    json.forEach(orden => {
        const formattedDate = formatDate(orden.fecha); 
        _root.innerHTML += Order(orden.clienteId, orden.clienteDni, orden.clienteNombre, formattedDate, orden.total);
    });

  
    renderPagination();
}


const renderPagination = (totalPages) => {
    const paginationRoot = document.getElementById("pagination");
    paginationRoot.innerHTML = "";  


    const prevButton = document.createElement("li");
    prevButton.classList.add("page-item");
    prevButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${currentPage - 1})">Anterior</a>`;
    if (currentPage === 1) prevButton.classList.add("disabled");  
    paginationRoot.appendChild(prevButton);

   
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement("li");
        pageButton.classList.add("page-item");
        if (page === currentPage) {
            pageButton.classList.add("active");  
        }
        pageButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${page})">${page}</a>`;
        paginationRoot.appendChild(pageButton);
    }

    
    const nextButton = document.createElement("li");
    nextButton.classList.add("page-item");
    nextButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${currentPage + 1})">Siguiente</a>`;
    if (currentPage === totalPages) nextButton.classList.add("disabled");  
    paginationRoot.appendChild(nextButton);
}

window.goToPage = (pageNumber) => {
   
    if (pageNumber < 1 || pageNumber > totalPages) return;

    currentPage = pageNumber;  
    OrdenesRender();  
}


export const OrdenesRender = (desde, hasta) => {
    getOrdenes(desde, hasta, limit, currentPage, (response) => {
        totalPages = response.totalPages;
        renderOrdenes(response.orders);  
        renderPagination(response.totalPages); 
    });
}



