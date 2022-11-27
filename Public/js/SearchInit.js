import { ProductosRender } from "./container/ProductSearchContainer.js";



window.onload = () =>{
    let busca=document.getElementById("Busca").value
    ProductosRender(busca);
}