import { CarritoRender } from "./container/CarritoContainer.js";


const userId = localStorage.getItem("UserId");
window.onload = () =>{
    CarritoRender(userId);
}