import { OrdenesRender } from "./container/OrderContainer.js";



window.onload = () =>{
    let desde=document.getElementById("desde").value
    let hasta=document.getElementById("hasta").value
    OrdenesRender(desde, hasta);
 
}