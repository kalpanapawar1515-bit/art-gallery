// =========================
// SWITCH LOGIN / REGISTER
// =========================

function showLogin() {

    document.getElementById("loginForm")
    .classList.add("active");

    document.getElementById("registerForm")
    .classList.remove("active");

}



function showRegister() {

    document.getElementById("registerForm")
    .classList.add("active");

    document.getElementById("loginForm")
    .classList.remove("active");

}



// =========================
// SHOW / HIDE LOGIN PASSWORD
// =========================

function toggleLoginPassword(button) {

    const passwordInput = document.getElementById("loginPassword");


    if(passwordInput.type === "password"){

        passwordInput.type = "text";
        button.innerText = "Hide";

    }

    else{

        passwordInput.type = "password";
        button.innerText = "Show";

    }

}



// =========================
// SHOW / HIDE REGISTER PASSWORD
// =========================

function toggleRegisterPassword(button) {

    const passwordInput = document.getElementById("regPassword");


    if(passwordInput.type === "password"){

        passwordInput.type = "text";
        button.innerText = "Hide";

    }

    else{

        passwordInput.type = "password";
        button.innerText = "Show";

    }

}



// =========================
// BACKGROUND SLIDESHOW
// =========================


let images = [

    "/static/images/bg1.jpg",
    "/static/images/bg2.jpg",
    "/static/images/bg3.jpg"

];


let index = 0;


let slides = document.querySelectorAll(".slide");



if(slides.length > 0){


    slides.forEach((slide,i)=>{

        slide.style.backgroundImage =
        `url(${images[i]})`;

    });



    slides[0].classList.add("active");



    setInterval(()=>{


        slides[index].classList.remove("active");


        index = (index + 1) % slides.length;


        slides[index].classList.add("active");


    },3000);


}