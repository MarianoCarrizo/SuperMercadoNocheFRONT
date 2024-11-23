

const urlProductos = "https://localhost:7175/api/productos/";
const urlProductosS = "https://localhost:7175/api/productos";
const urlCarritos = "https://localhost:7175/api/carrito/";
const urlOrdenes = "https://localhost:7175/api/Orden";

export const getOrdenes = (from, to, limit, page, callback) => {
  
    let url = `${urlOrdenes}?limit=${limit}&page=${page}`;
    if (from && to) {
        
        url += `&from=${from}&to=${to}`;
    }

    fetch(url, {
        method: 'GET'
    })
    .then((httpResponse) => {
        if (httpResponse.ok) {
            return httpResponse.json();
        }
    })
    .then(body => {
        console.log(body);
        callback(body);  
    })
    .catch(error => {
        console.error("Error fetching orders:", error);
    });
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

export const getProductosByCategory = (category,callback) => {

    let url = `${urlProductos}find`;

    if (category) {
        url += `?category=${encodeURIComponent(category)}`;
    }

    fetch(url,{
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
     console.log("cantidad :",cantidad);
     console.log("productoId :",productoId);
     console.log("clienteId :",userId);
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

export const modifyProduct = (cantidad, userId, productoId, callback) => {
    let jsonBody = {
        clienteId: userId,
        productoId: productoId,
        cantidad: cantidad
    };

    console.log("cantidad :", cantidad);
    console.log("productoId :", productoId);
    console.log("clienteId :", userId);
    let body = JSON.stringify(jsonBody);
    console.log(body);

    fetch(`${urlCarritos}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    })
    .then((httpResponse) => {
        
        if (httpResponse.status === 204) {
            
            console.log("operation successful.");
            
           
            if (typeof callback === 'function') {
                callback(null);  
            }
            return; 
        }

        return httpResponse.json();
    })
    .then((body) => {
        
        if (typeof callback === 'function') {
          
            if (body) {
                console.log(body);
                callback(body);
            } else {
              
                callback(null);
            }
        }
    })
    .catch((error) => {
     
        console.error("Error modifying product:", error);
        
        
        if (typeof callback === 'function') {
          
        }
    });
};


export const getProductosName = (name, category, callback) => {
    
    let url = `${urlProductosS}`;

    if (name) {
        url += `?name=${encodeURIComponent(name)}`;
    }

   
    if (category) {
      
        if (url.includes('?')) {
            url += `&category=${encodeURIComponent(category)}`;
        } else {

            url += `?category=${encodeURIComponent(category)}`;
        }
    }
    console.log("Constructed URL:", url);

    fetch(url, {
        method: 'GET'
    })
    .then(httpResponse => {
       
        if (httpResponse.status === 404) {
            console.log("No products found for the search.");
            return null; 
        }

        if (httpResponse.ok) {
            return httpResponse.json(); 
        }

        console.error(`Error: ${httpResponse.status} - ${httpResponse.statusText}`);
        return null;
    })
    .then(body => {
        if (body === null) {
            console.log("No products found or there was an error fetching.");
        } else {
            console.log("Fetched products:", body);
        }
        callback(body);
    })
    .catch(error => {
        console.error("Error fetching products:", error);
        callback(null); 
    });
};

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
