import { productoAgregado } from "../components/productoAgregado.js";
import { AddProduct } from "../services/fetchServices.js";
import { vacio } from "../components/vacio.js";
const renderAgregado = (json) =>{
    
let _root = document.getElementById("producto-index");
let xd = document.getElementById("borrarForm");
_root.innerHTML=productoAgregado("")
xd.innerHTML=vacio("");

}


export const AgregadoRender = (cantidad,userId,productoId) => {
    AddProduct(cantidad,userId,productoId , renderAgregado );
}