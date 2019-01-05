const backDrop = document.querySelector("#backdrop");
const navToggleButton = document.querySelector(".nav-toggle-icon")
const mobileNavLinks = document.querySelector(".mobile-nav")

navToggleButton.addEventListener("click", ()=>{
    mobileNavLinks.style.display = "block";
    backdrop.style.display = 'block';
});

backDrop.addEventListener("click", ()=>{
    mobileNavLinks.style.display = "none";
    backdrop.style.display = 'none';
});