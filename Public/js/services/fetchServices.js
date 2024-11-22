

const urlProductos = "https://localhost:7175/api/productos/";
const urlProductosS = "https://localhost:7175/api/productos";
const urlCarritos = "https://localhost:7175/api/carrito/";
const urlOrdenes = "https://localhost:7175/api/Orden";

export const getOrdenes = (from, to, limit, page, callback) => {
    // Construct the base URL
    let url = `${urlOrdenes}?limit=${limit}&page=${page}`;

    // Check if `from` and `to` are provided
    if (from && to) {
        // If both `from` and `to` are provided, add them to the URL
        url += `&from=${from}&to=${to}`;
    }

    // Fetch orders from the backend
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
        callback(body);  // Pass the response body to the callback function
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

    // If category is provided, add it as the first query parameter
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
export const getProductosName = (name, category, callback) => {
    // Start with the base URL for the API
    let url = `${urlProductosS}`;

    // Conditionally add `name` parameter to the URL if it's not empty
    if (name) {
        url += `?name=${encodeURIComponent(name)}`;
    }

    // Conditionally add `category` parameter to the URL if it's not empty
    if (category) {
        // If `name` is already in the URL, append `&` to separate parameters
        if (url.includes('?')) {
            url += `&category=${encodeURIComponent(category)}`;
        } else {
            // If `name` is not present, this will add `category` as the first query parameter
            url += `?category=${encodeURIComponent(category)}`;
        }
    }

    // Log the constructed URL for debugging
    console.log("Constructed URL:", url);

    // Fetch the products from the API
    fetch(url, {
        method: 'GET'
    })
    .then(httpResponse => {
        // Check if the response status is 404 (Not Found)
        if (httpResponse.status === 404) {
            console.log("No products found for the search.");
            return null; // Return null explicitly for 404
        }

        // If the response is OK (status 200-299), parse the JSON body
        if (httpResponse.ok) {
            return httpResponse.json(); // Parse the JSON response
        }

        // If the response isn't OK (e.g., 500), handle it here
        console.error(`Error: ${httpResponse.status} - ${httpResponse.statusText}`);
        return null;
    })
    .then(body => {
        if (body === null) {
            console.log("No products found or there was an error fetching.");
        } else {
            // Log the parsed JSON body for debugging purposes
            console.log("Fetched products:", body);
        }

        // Call the callback with the body (it can be null if no products were found)
        callback(body);
    })
    .catch(error => {
        // Handle any network errors or other issues
        console.error("Error fetching products:", error);
        callback(null); // Return null if there's an error
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
