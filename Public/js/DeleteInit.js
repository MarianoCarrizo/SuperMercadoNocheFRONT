import { CarritoRender } from "./container/CarritoDContainer.js";


const userId = localStorage.getItem("UserId");
window.onload = () =>{
    CarritoRender(userId);
}