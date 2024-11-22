import { Order } from "../components/Order.js";
import { getOrdenes } from "../services/fetchServices.js";


let currentPage = 1;  // Current page
const limit = 5; // Number of rows per page
let totalPages = 0;

// Function to format the date into DD/MM/YYYY
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

const renderOrdenes = (json) => {
    let _root = document.getElementById("ordenes-content");
    _root.innerHTML = ""; // Clear previous content

    // Loop through current orders and render them
    json.forEach(orden => {
        const formattedDate = formatDate(orden.fecha); // Format the date
        _root.innerHTML += Order(orden.clienteId, orden.clienteDni, orden.clienteNombre, formattedDate, orden.total);
    });

    // Render the pagination buttons
    renderPagination();
}

// Function to render the pagination (Next / Previous)
const renderPagination = (totalPages) => {
    const paginationRoot = document.getElementById("pagination");
    paginationRoot.innerHTML = "";  // Clear existing pagination

    // Previous page button
    const prevButton = document.createElement("li");
    prevButton.classList.add("page-item");
    prevButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${currentPage - 1})">Anterior</a>`;
    if (currentPage === 1) prevButton.classList.add("disabled");  // Disable if on the first page
    paginationRoot.appendChild(prevButton);

    // Page buttons (1 to totalPages)
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement("li");
        pageButton.classList.add("page-item");
        if (page === currentPage) {
            pageButton.classList.add("active");  // Highlight current page
        }
        pageButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${page})">${page}</a>`;
        paginationRoot.appendChild(pageButton);
    }

    // Next page button
    const nextButton = document.createElement("li");
    nextButton.classList.add("page-item");
    nextButton.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${currentPage + 1})">Siguiente</a>`;
    if (currentPage === totalPages) nextButton.classList.add("disabled");  // Disable if on the last page
    paginationRoot.appendChild(nextButton);
}

window.goToPage = (pageNumber) => {
    // Ensure pageNumber is within valid range
    if (pageNumber < 1 || pageNumber > totalPages) return;

    currentPage = pageNumber;  // Set the current page
    OrdenesRender();  // Re-render the table with the new page
}

// OrdenesRender to fetch orders and render them with pagination
export const OrdenesRender = (desde, hasta) => {
    getOrdenes(desde, hasta, limit, currentPage, (response) => {
        totalPages = response.totalPages;
        renderOrdenes(response.orders);  // Render the orders for the current page
        renderPagination(response.totalPages);  // Render the pagination buttons for the total pages
    });
}



