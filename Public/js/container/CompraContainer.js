import { compraDone } from "../components/CompraEfectuada.js";
import { CompraDone } from "../services/fetchServices.js";


const renderCompra = (json) =>{
   
    let _root = document.getElementById("carrito-card");
        _root.innerHTML+=compraDone("");


}




export const compraRender = (clienteid) => {

    CompraDone(clienteid, renderCompra)
        



    
}