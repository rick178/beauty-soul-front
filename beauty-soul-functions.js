
//elementos del DOM

// let hamburgerButton =  document.getElementById("menu-toggle");
// hamburgerButton.addEventListener("click", (event)=>{
//     alert("Menu Hamburguesa");
// }) 

// const toggle = document.getElementById("menu-toggle");
// const menu = document.querySelector(".menu-beauty");

// toggle.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

const logoBS = document.getElementById("logo-bs");
const sliderBS = document.querySelector(".beautysoul-slider");

logoBS.addEventListener("animationend", () => {
    console.log("Animacion terminada");
    sliderBS.style.display = "block";
    sliderBS.style.opacity = 1; 
});

logoBS.addEventListener("webkitAnimationEnd", () => {
    console.log("Animacion terminada");
        sliderBS.style.display = "block";
        sliderBS.style.opacity = 1; 
});

// document.addEventListener("DOMContentLoaded", () => {
//     const sliderBS = document.querySelector(".beautysoul-slider");

//     setTimeout(() => {
//         sliderBS.style.display = "block";
//     }, 3000); // 3 segundos = duración de tu animación
// });