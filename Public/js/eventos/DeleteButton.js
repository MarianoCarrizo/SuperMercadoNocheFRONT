import { deleteRender} from "../container/CarritoDeleteContainer.js";


document.getElementById("boton-delete").addEventListener("click", borrar);



function borrar() {
    
    console.log("Se escucha el evento")
    let e = document.getElementById("carrito-card");
    e.innerHTML=("");
    let busca=document.getElementById("eliminar-id").value
    const userId = localStorage.getItem('UserId');
    console.log(busca,userId)
    debugger;
    deleteRender(userId,busca)
}