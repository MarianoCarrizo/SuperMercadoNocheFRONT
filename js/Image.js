const urlImg1 = "https://localhost:7175/api/productos/1"
const  products = "https://localhost:7175/api/productos"

fetch(urlImg1)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img1=document.getElementById('img1');
    const nombre1=document.getElementById('nombre1');
    const marca1=document.getElementById('marca1');
    const precio1=document.getElementById('precio1');

    img1.src=data.image;
    nombre1.textContent  = data.nombre;
    marca1.innerText = data.marca;
    precio1.innerText ='$'+data.precio;
 

});


function getOrdenes(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', products, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `              
                <tr class="large">
                    <th class="text-center">${item.ordenId}</th>
                    <th class="text-center">${item.productos[0].nombre}</th>
                    <th class="text-center">${new Date(item.fecha).toLocaleString()}</th>
                    <th class="text-center">$${item.total}</th>
                </tr>
                `
            }          
        }
    }
}