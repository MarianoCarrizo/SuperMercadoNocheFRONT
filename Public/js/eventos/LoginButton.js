
const loginButton = document.getElementById("boton-log");
const modal = document.getElementById("login-modal");
const closeModal = document.getElementById("close-modal");
const cancelButton = document.getElementById("cancel-login");
const loginForm = document.getElementById("login-form");
const togglePasswordIcon = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");
const greeting = document.getElementById("greeting"); 
const logoutButton = document.getElementById("logout-button"); 
const collapse = document.getElementById("collapse"); 

import { login } from "../services/fetchServices.js";


loginButton.addEventListener("click", function() {
    modal.style.display = "block"; 
});


closeModal.addEventListener("click", function() {
    modal.style.display = "none"; 
});


cancelButton.addEventListener("click", function() {
    modal.style.display = "none";
});


loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = passwordInput.value;

    if (email && password) {
        
        login(email, password, function(response) {
            if (response) {

                localStorage.setItem("clientName", response.nombre); 
                localStorage.setItem("UserId", response.clienteId); 

               
                modal.style.display = "none";

                updateUIAfterLogin();

                
                window.location.reload();
            } else {
                console.log("Invalid email or password. Please try again.");
            }
        });
    } else {
        console.log("Please enter both email and password.");
    }
});


logoutButton.addEventListener("click", function() {
    localStorage.removeItem("UserId");
    localStorage.removeItem("clientName");

    greeting.style.display = "none";
    loginButton.style.display = "block";
    collapse.style.display = "none";

    window.location.reload(); 
});



togglePasswordIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});


function updateUIAfterLogin() {
    const clientName = localStorage.getItem("clientName");
    const userId = localStorage.getItem("UserId");

    if (clientName && userId) {
        
        loginButton.style.display = "none"; 
        greeting.style.display = "block"; 
        greeting.innerHTML = `Hola ${clientName}`; 

        collapse.style.display = "block"; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const userId = localStorage.getItem("UserId");
    const clientName = localStorage.getItem("clientName");

    if (userId && clientName) {
        updateUIAfterLogin(); 
    } else {
        loginButton.style.display = "block"; 
        greeting.style.display = "none"; 
        collapse.style.display = "none"; 
    }
    const cartLink = document.getElementById("cart-link");
    if (!userId && cartLink) {
        cartLink.style.display = "none";
    }
});
