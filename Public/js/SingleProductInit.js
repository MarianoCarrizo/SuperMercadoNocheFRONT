import { SingleProductRender } from "./container/productSingleContainer.js";

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var productoId = urlParams.get('productoId');

window.onload = () =>{
    if (urlParams.has('productoId')){
        console.log(productoId)
        localStorage.setItem('productoId', productoId);
        SingleProductRender(productoId);
    }
    else{
        alert('Producto ID no encontrado');
        window.location.href = "../";
    }
}