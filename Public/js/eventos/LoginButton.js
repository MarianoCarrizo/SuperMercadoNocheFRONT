


document.getElementById("login-button").addEventListener("click", logearse);



function buscarProductos() {
    
    console.log("Se escucha el evento")
    let busca=document.getElementById("ingresar-id").value
    const userId = localStorage.setItem('UserId',busca);
    debugger;
}