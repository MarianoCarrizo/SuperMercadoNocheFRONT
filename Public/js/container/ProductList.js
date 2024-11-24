import { Producto } from "../components/ProductList.js";
import { getProductos } from "../services/fetchServices.js";
import { getProductosByCategory } from "../services/fetchServices.js";
import { getProductosName } from "../services/fetchServices.js";


const searchField = document.getElementById("busca-box");
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');

let selectedCategory = '';  

let noCheckbox = true; 

const Checkboxes = Array.from(categoryCheckboxes);

Checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      selectedCategory = this.getAttribute('data-category');
      Checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
     
      getProductosByCategory(selectedCategory, renderProductos);
    }

    noCheckbox = !Checkboxes.some(checkbox => checkbox.checked);

    if (noCheckbox) {
      console.log('No checkbox is selected');
    } else {
      console.log('At least one checkbox is selected');
    }
  });
});

searchField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    if (noCheckbox) {
      selectedCategory = null; 
    }
    
    const searchValue = searchField.value.trim(); 

      getProductosName(searchValue, selectedCategory, renderProductos);
  
    if (!renderProductos) {
      console.log("No products found or there was an error.");
    }
  }
});

const containerSearch = document.querySelector('.container-search');

const initialTop = containerSearch.offsetTop;

const windowHeight = window.innerHeight;
const containerHeight = containerSearch.offsetHeight;


const stopPosition = document.documentElement.scrollHeight - windowHeight - containerHeight + 3990;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > initialTop) {
    if (scrollPosition > stopPosition) {
      containerSearch.style.position = 'sticky ';

    } else {

      containerSearch.style.position = 'sticky ';
      containerSearch.style.top = '90px'; 
    }
  } else {   
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
