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
export const getProductosName = (name,callback) => {
    fetch(`${urlProductosS}?name=${name}`,{
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



export const getCarritoById = (carritoId, callback) => {
    fetch(`${urlCarritos}?id=${carritoId}`, {
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
