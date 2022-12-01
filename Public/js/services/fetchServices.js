

const urlProductos = "https://localhost:7175/api/productos/";
const urlProductosS = "https://localhost:7175/api/productos";
const urlCarritos = "https://localhost:7175/api/carrito/";
const urlOrdenes = "https://localhost:7175/api/Orden";

export const getOrdenes = (from,to, callback) => {
    fetch(`${urlOrdenes}?from=${from}&to=${to}`,{
        method : 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body)
    })
}
export const getProductos = (callback) => {
    fetch(`${urlProductos}`,{
        method : 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body)
    })
}
export const AddProduct = (cantidad,userId,productoId, callback) => {
    let jsonBody = {
        clienteId: userId,
        productoId: productoId,
        cantidad:cantidad
       
     }
     let body =JSON.stringify(jsonBody)
     console.log(body)
    fetch(`${urlCarritos}`,{
        method : 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: body
    })
    .then((httpResponse)=>{ 
        if (httpResponse == 404){
            return null;
        }
       
    })
    .then(body => {
        console.log(body)
        callback(body)
    })
}
export const getProductosName = (name,callback) => {
    fetch(`${urlProductosS}?name=${name}`,{
        method : 'GET'
    })
    .then((httpResponse)=>{ 
        if (httpResponse == 404){
            return null;
        }
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body)
    })
}
export const CompraDone = (UserId,callback) => {
    fetch(`${urlOrdenes}/${UserId}`,{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((httpResponse)=>{ 
        if (httpResponse == 404){
            return null;
        }
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body)
    })
}



export const DeleteProduct = (userId,productoId) => {
    fetch(`${urlCarritos}${userId}/${productoId}`, {
        method: 'DELETE'
    })
   
}
export const getCarritoById = (carritoId, callback) => {
    fetch(`${urlCarritos}?id=${carritoId}`, {
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse == 404){
            return "NotFound";
        }
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body);
        callback(body);
    })
}
export const getProductoById = (productoId, callback) => {
    fetch(`${urlProductos}+${productoId}`, {
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body);
        callback(body);
    })
}
