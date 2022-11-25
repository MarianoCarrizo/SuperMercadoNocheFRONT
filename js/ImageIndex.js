const urlImg1 = "https://localhost:7175/api/productos/1"
const urlImg2 = "https://localhost:7175/api/productos/2"
const urlImg3 = "https://localhost:7175/api/productos/3"
const urlImg4 = "https://localhost:7175/api/productos/4"
const urlImg5 = "https://localhost:7175/api/productos/5"
const urlImg6 = "https://localhost:7175/api/productos/6"
const  products = "https://localhost:7175/api/productos"

fetch(urlImg1)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img1');
    const nombre=document.getElementById('nombre1');
    const precio=document.getElementById('precio1');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

});
fetch(urlImg2)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img2');
    const nombre=document.getElementById('nombre2');
    const precio=document.getElementById('precio2');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

});
fetch(urlImg3)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img3');
    const nombre=document.getElementById('nombre3');
    const precio=document.getElementById('precio3');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

});
fetch(urlImg4)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img4');
    const nombre=document.getElementById('nombre4');
    const precio=document.getElementById('precio4');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

});
fetch(urlImg5)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img5');
    const nombre=document.getElementById('nombre5');
    const precio=document.getElementById('precio5');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

});
fetch(urlImg6)
.then(rest=>rest.json())
.then(data=>{
    console.log(data)
    
    const img=document.getElementById('img6');
    const nombre=document.getElementById('nombre6');
    const precio=document.getElementById('precio6');

    img.src=data.image;
    nombre.textContent  = data.nombre +" "+data.marca
    precio.innerText ='$'+data.precio;
 

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