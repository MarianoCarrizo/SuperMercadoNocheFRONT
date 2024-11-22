import { Producto } from "../components/ProductList.js";
import { getProductos } from "../services/fetchServices.js";
import { getProductosByCategory } from "../services/fetchServices.js";
import { getProductosName } from "../services/fetchServices.js";

// Select the search field (input element) and category checkboxes
const searchField = document.getElementById("busca-box");
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');

let selectedCategory = '';  // Global variable to store the selected category

// Listen for changes to the category checkboxes
categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      selectedCategory = this.getAttribute('data-category');
      categoryCheckboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
      // Fetch products based on the selected category
      getProductosByCategory(selectedCategory, renderProductos);
    }
  });
});

// Event listener for "Enter" key press in the search field
searchField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    // Get the value of the search field
    const searchValue = searchField.value;

    // Log the selected category and search value for debugging
    console.log("Selected Category:", selectedCategory);
    console.log("Search Value:", searchValue);

    // Fetch products based on the entered search value and selected category
    getProductosName(searchValue, selectedCategory, renderProductos);

    // Optionally handle empty or error cases (for now, this part seems redundant)
    if (!renderProductos) {
      console.log("No products found or there was an error.");
    }
  }
});

// Function to render products in the UI
const renderProductos = (json) => {
  let _root = document.getElementById("producto-lista");
  _root.innerHTML = '';  // Clear previous content

  // Loop through the products and render them
  Object.values(json).forEach(producto => {
    _root.innerHTML += Producto(producto.nombre, producto.image, producto.marca, producto.productoId, producto.precio);
  });
};

// Example render function (you might use this elsewhere)
export const ProductosRender = () => {
  getProductos(renderProductos);
};
