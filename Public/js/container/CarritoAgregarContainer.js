import { productoAgregado } from "../components/productoAgregado.js";
import { AddProduct } from "../services/fetchServices.js";

const renderAgregado = (json) =>{
    
let _root = document.getElementById("producto-index");
_root.innerHTML=productoAgregado("")
}


export const AgregadoRender = (cantidad,userId,productoId) => {
    AddProduct(cantidad,userId,productoId , renderAgregado );
}